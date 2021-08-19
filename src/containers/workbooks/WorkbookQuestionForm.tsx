import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';

import { WorkbookQuestionModel } from '@/models';
import { WorkbookQuestion } from './WorkbookQuestion';
import { Button } from '@/components';
import { useForm } from 'react-hook-form';

export interface WorkbookQuestionFormProps extends WorkbookQuestionModel {
  onSubmit: (values: WorkbookQuestionFormValues) => void;
}

export interface WorkbookQuestionFormValues extends WorkbookQuestionModel {}

const WorkbookQuestionForm: React.FC<WorkbookQuestionFormProps> = ({
  onSubmit,
  ...rests
}) => {
  const { t } = useTranslation();
  const form = useForm<WorkbookQuestionFormValues>({
    defaultValues: rests,
  });
  const { handleSubmit, reset } = form;

  React.useEffect(() => {
    reset(rests);
  }, [rests]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WorkbookQuestion {...rests} />
      <div className={classnames('grid grid-cols-2 gap-4', 'mt-8')}>
        <Button type="submit" className={'col-span-2'}>
          {t('workbooks:submit')}
        </Button>
      </div>
    </form>
  );
};

export { WorkbookQuestionForm };
export default WorkbookQuestionForm;
