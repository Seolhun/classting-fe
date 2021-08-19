import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';

import { WorkbookModel, WorkbookQuestionModel } from '@/models';
import { Button } from '@/components';
import { Question } from '@/containers';
import { useStep } from '@/hooks';
import { workbookState } from '@/stores';

export interface WorkbookProps {
  workbook: WorkbookModel;
}

interface WorkbookQuestionFormValues extends WorkbookQuestionModel {}

const Workbook: React.FC<WorkbookProps> = ({ workbook }) => {
  const { t } = useTranslation();
  const [, setWorkbook] = useRecoilState(workbookState);
  const { step, isFirstStep, isLastStep, nextStep, prevStep } = useStep(
    workbook?.results?.length,
  );
  const question = workbook?.results?.[step];

  const form = useForm<WorkbookQuestionFormValues>({
    defaultValues: question,
  });
  const { handleSubmit, reset } = form;

  React.useEffect(() => {
    reset(question);
  }, [question]);

  const handlePrevStep = React.useCallback(() => {
    prevStep();
  }, [prevStep]);

  const handleNextStep = React.useCallback(() => {
    nextStep();
  }, [nextStep]);

  const solveQuestion = React.useCallback(
    (values: WorkbookQuestionFormValues) => {
      const copiedResults = [...workbook.results];
      copiedResults[step] = {
        ...copiedResults[step],
        chosenAnswer: values.chosenAnswer,
      };
    },
    [question, step],
  );

  return (
    <div className={classnames('max-w-screen-lg', 'mx-auto')}>
      <form onSubmit={handleSubmit(solveQuestion)}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {workbook?.results && <Question {...question} />}
        </motion.div>
        <div className={classnames('grid grid-cols-2 gap-4', 'mt-8')}>
          <Button type="submit" className={'col-span-2'}>
            {t('workbooks:prev')}
          </Button>
          {!isFirstStep && (
            <Button
              intent="secondary"
              className={classnames({
                'col-span-1': !isLastStep,
                'col-span-2': isLastStep,
              })}
              onClick={handlePrevStep}
            >
              {t('workbooks:prev')}
            </Button>
          )}
          {!isLastStep && (
            <Button
              intent="secondary"
              className={classnames({
                'col-span-1': !isFirstStep,
                'col-span-2': isFirstStep,
              })}
              onClick={handleNextStep}
            >
              {t('workbooks:next')}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export { Workbook };
export default Workbook;
