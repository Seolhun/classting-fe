import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { useRecoilState } from 'recoil';

import { Button } from '@/components';
import { WorkbookQuestion } from '@/containers';
import { useStep } from '@/hooks';
import { workbookState } from '@/stores';

export interface WorkbookFormProps {}

const WorkbookForm: React.FC<WorkbookFormProps> = () => {
  const { t } = useTranslation();
  const [workbook, setWorkbook] = useRecoilState(workbookState);
  const { step, isFirstStep, isLastStep, nextStep, prevStep } = useStep(
    workbook?.results?.length - 1,
  );

  const memoQuestion = React.useMemo(() => {
    const question = workbook?.results?.[step];
    return question;
  }, [workbook, step]);

  const onChangeQuestion = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (workbook?.results?.[step]) {
        Object.assign(workbook.results[step], {
          chosenAnswer: value,
        });
        setWorkbook(workbook);
      }
    },
    [workbook, step],
  );

  const handlePrevStep = React.useCallback(() => {
    prevStep();
  }, [prevStep]);

  const handleNextStep = React.useCallback(() => {
    nextStep();
  }, [nextStep]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <WorkbookQuestion {...memoQuestion} onChange={onChangeQuestion} />
      </motion.div>
      <div className={classnames('grid grid-cols-2 gap-4', 'mt-2')}>
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
            disabled={!memoQuestion.chosenAnswer}
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
