import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';

import { APIService } from '@/clients';
import { WorkbookLayout } from '@/layouts';
import {
  FormWrapper,
  Input,
  HTMLSelect,
  H2,
  Button,
  HTMLSelectOptionProps,
  Meta,
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

const WorkbookGeneratorPage = () => {
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
    const response = await APIService.workbooks.generateWorkbookList(values);
    if (Array.isArray(response.results)) {
      const id = await workbookDB.workbooks.add(response);
      if (id) {
        router.push(`/workbooks/${id}`);
      }
    }
  };

  return (
    <>
      <Meta title="Workbook Generator" />
      <WorkbookLayout>
        <div className={classnames('max-w-md', 'mx-auto')}>
          <div className={'text-center'}>
            <H2>{t('workbooks:title')}</H2>
          </div>
          <div className={'mt-10'}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormWrapper label={t('workbooks:amount.label')}>
                <Input {...register('amount')} type="number" min={1} max={50} />
              </FormWrapper>
              <FormWrapper label={t('workbooks:categories.label')}>
                <HTMLSelect
                  {...register('category')}
                  options={memoCategoriesOptions}
                />
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
                  <Button
                    className="col-span-1"
                    intent="dark"
                    onClick={resetForm}
                  >
                    {t('workbooks:reset')}
                  </Button>
                </div>
              </FormWrapper>
            </form>
          </div>
        </div>
      </WorkbookLayout>
    </>
  );
};

export default WorkbookGeneratorPage;
