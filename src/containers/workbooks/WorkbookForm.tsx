import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { useRecoilState } from 'recoil';
import { useHistory, useLocation } from 'react-router-dom';

import { Button } from '@/components';
import { WorkbookQuestion } from '@/containers';
import { useStep } from '@/hooks';
import { workbookState } from '@/stores';
import { workbookDB } from '@/indexDB';

const WorkbookForm: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  const [workbook, setWorkbook] = useRecoilState(workbookState);
  const { step, isFirstStep, isLastStep, nextStep, prevStep } = useStep(
    workbook?.results?.length - 1,
  );

  const memoQuestion = React.useMemo(() => {
    const question = workbook?.results?.[step];
    return question;
  }, [workbook, step]);

  const onChangeQuestion = React.useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const mutatedResults = workbook.results.map((result, index) => {
        if (index === step) {
          return {
            ...result,
            chosenAnswer: value,
          };
        }
        return result;
      });
      const updatedWorkbook = {
        ...workbook,
        results: mutatedResults,
      };
      setWorkbook(updatedWorkbook);
      await workbookDB.updateWorkbook(updatedWorkbook);
    },
    [workbook, step],
  );

  const handlePrevStep = React.useCallback(() => {
    prevStep();
  }, [prevStep]);

  const handleNextStep = React.useCallback(() => {
    if (!memoQuestion.chosenAnswer) {
      return;
    }
    nextStep();
  }, [memoQuestion.chosenAnswer, nextStep]);

  const finishWorkbook = React.useCallback(async () => {
    if (!memoQuestion.chosenAnswer) {
      return;
    }
    await workbookDB.finishWorkbook(workbook.id);
    history.push(location.pathname + '/summary');
  }, [workbook.id, memoQuestion.chosenAnswer]);

  return (
    <div>
      <WorkbookQuestion {...memoQuestion} onChange={onChangeQuestion} />
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
        {isLastStep ? (
          <Button
            intent="primary"
            className={'col-span-2'}
            onClick={finishWorkbook}
            disabled={!memoQuestion.chosenAnswer}
          >
            {t('workbooks:finish')}
          </Button>
        ) : (
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
