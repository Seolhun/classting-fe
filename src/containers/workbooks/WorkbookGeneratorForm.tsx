import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { APIService } from '@/clients';
import {
  FormWrapper,
  Input,
  HTMLSelect,
  Button,
  HTMLSelectOptionProps,
} from '@/components';
import {
  questionCategories,
  WorkbookCategoryEnum,
  WorkbookDifficulty,
  WorkbookGeneratorModel,
  WorkbookType,
} from '@/models';
import { workbookGeneratorState } from '@/stores';
import { workbookDB } from '@/indexDB';

interface WorkbookGeneratorFormValues extends WorkbookGeneratorModel {}

const WorkbookGeneratorForm = () => {
  const { t } = useTranslation();
  const router = useHistory();
  const [workbookGenerator] = useRecoilState(workbookGeneratorState);

  const form = useForm<WorkbookGeneratorFormValues>({
    defaultValues: workbookGenerator,
  });
  const { register, handleSubmit, reset } = form;

  const memoCategoriesOptions = React.useMemo(() => {
    return questionCategories.map<HTMLSelectOptionProps>((key) => {
      const value = WorkbookCategoryEnum[key];
      return {
        label: t(`workbooks:categories.${key}`) as string,
        value: value === 0 ? undefined : value,
      };
    });
  }, []);

  const memoDifficultyOptions = React.useMemo(() => {
    const difficulties: WorkbookDifficulty[] = [
      'any',
      'easy',
      'hard',
      'medium',
    ];
    return difficulties.map<HTMLSelectOptionProps>((difficulty) => ({
      label: t(`workbooks:difficulties.${difficulty}`) as string,
      value: difficulty === 'any' ? undefined : difficulty,
    }));
  }, []);

  const memoTypeOptions = React.useMemo(() => {
    const types: WorkbookType[] = ['any', 'multiple', 'boolean'];
    return types.map<HTMLSelectOptionProps>((type) => ({
      label: t(`workbooks:type.${type}`) as string,
      value: type === 'any' ? undefined : type,
    }));
  }, []);

  const resetForm = React.useCallback(() => {
    reset();
  }, []);

  const onSubmit = async (values: WorkbookGeneratorFormValues) => {
    console.debug(values);
    const response = await APIService.workbooks.generateWorkbookList(values);
    if (Array.isArray(response.results)) {
      const id = await workbookDB.workbooks.add({
        ...response,
        name: values.name,
      });
      if (id) {
        router.push(`/workbooks/${id}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper label={t('workbooks:name.label')}>
        <Input
          {...register('name', {
            required: true,
          })}
          placeholder={t('workbooks:name.placeholder')}
        />
      </FormWrapper>
      <FormWrapper label={t('workbooks:amount.label')}>
        <Input
          {...register('amount', {
            required: true,
          })}
          type="number"
          min={1}
          max={50}
        />
      </FormWrapper>
      <FormWrapper label={t('workbooks:categories.label')}>
        <HTMLSelect {...register('category')} options={memoCategoriesOptions} />
      </FormWrapper>
      <FormWrapper label={t('workbooks:difficulties.label')}>
        <HTMLSelect
          {...register('difficulty')}
          options={memoDifficultyOptions}
        />
      </FormWrapper>
      <FormWrapper label={t('workbooks:type.label')}>
        <HTMLSelect {...register('type')} options={memoTypeOptions} />
      </FormWrapper>
      <FormWrapper>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Button type="submit" className="col-span-2">
            {t('workbooks:start')}
          </Button>
          <Button className="col-span-1" intent="dark" onClick={resetForm}>
            {t('workbooks:reset')}
          </Button>
        </div>
      </FormWrapper>
    </form>
  );
};

export { WorkbookGeneratorForm };
export default WorkbookGeneratorForm;
