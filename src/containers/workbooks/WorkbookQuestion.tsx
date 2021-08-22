import React from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';

import { WorkbookQuestionModel } from '@/models';
import { Card, H5, Tag, Radio } from '@/components';

export interface WorkbookQuestionProps extends WorkbookQuestionModel {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WorkbookQuestion: React.FC<WorkbookQuestionProps> = ({
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers = [],
  chosenAnswer,
  onChange,
}) => {
  const { t } = useTranslation();

  const memoAllAnswers = React.useMemo(() => {
    return [...incorrect_answers, correct_answer].sort(
      () => Math.random() * 10 - Math.random() * 10,
    );
  }, [correct_answer, incorrect_answers.length]);

  return (
    <Card>
      <div>{category}</div>
      <div className="mt-1">
        <Tag>{t(`workbooks:difficulties.${difficulty}`)}</Tag>
        <Tag>{t(`workbooks:type.${type}`)}</Tag>
      </div>
      <div className="mt-2">
        <H5 dangerouslySetInnerHTML={{ __html: question }} />
        {memoAllAnswers.map((memoAnswer, i) => {
          const isAnswer = memoAnswer === chosenAnswer;
          return (
            <div key={i}>
              <Radio
                htmlForm={`${question}-${i}`}
                name="chosenAnswer"
                value={memoAnswer}
                onChange={onChange}
                checked={isAnswer}
              >
                <div
                  className={classnames({
                    'text-red-500': isAnswer && chosenAnswer !== correct_answer,
                  })}
                  dangerouslySetInnerHTML={{ __html: memoAnswer }}
                />
              </Radio>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export { WorkbookQuestion };
export default WorkbookQuestion;
