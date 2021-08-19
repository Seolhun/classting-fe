import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { useRecoilState } from 'recoil';

import { WorkbookModel } from '@/models';
import { Button } from '@/components';
import { WorkbookQuestionForm } from '@/containers';
import { useStep } from '@/hooks';
import { workbookState } from '@/stores';

import { WorkbookQuestionFormValues } from './WorkbookQuestionForm';

export interface WorkbookFormProps {
  workbook: WorkbookModel;
}

const WorkbookForm: React.FC<WorkbookFormProps> = ({ workbook }) => {
  const { t } = useTranslation();
  const [, setWorkbook] = useRecoilState(workbookState);
  const { step, isFirstStep, isLastStep, nextStep, prevStep } = useStep(
    workbook?.results?.length,
  );
  const question = workbook?.results?.[step];

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
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {workbook?.results && (
          <WorkbookQuestionForm {...question} onSubmit={solveQuestion} />
        )}
      </motion.div>
      <div className={classnames('grid grid-cols-2 gap-4', 'mt-8')}>
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
    </div>
  );
};

export { WorkbookForm };
export default WorkbookForm;
