import React from 'react';
import { useTranslation } from 'react-i18next';

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
        {memoAllAnswers.map((memoQuestion, i) => (
          <div key={i}>
            <Radio
              htmlForm={`${question}-${i}`}
              name="chosenAnswer"
              value={memoQuestion}
              onChange={onChange}
            >
              {memoQuestion}
            </Radio>
          </div>
        ))}
      </div>
    </Card>
  );
};

export { WorkbookQuestion };
export default WorkbookQuestion;
