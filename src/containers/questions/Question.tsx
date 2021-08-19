import React from 'react';
import { useTranslation } from 'react-i18next';

import { WorkbookQuestionModel } from '@/models';
import { Card, H4, Tag, Checkbox, Radio } from '@/components';

export interface QuestionProps extends WorkbookQuestionModel {}

const Question: React.FC<QuestionProps> = ({
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
}) => {
  const { t } = useTranslation();

  const memoAllQuestions = React.useMemo(() => {
    return [...incorrect_answers, correct_answer].sort(
      () => Math.random() * 10 - Math.random() * 10,
    );
  }, [correct_answer, incorrect_answers.length]);

  return (
    <Card>
      <div className="">{category}</div>
      <div>
        <Tag>{t(`workbooks:difficulties.${difficulty}`)}</Tag>
        <Tag>{t(`workbooks:type.${type}`)}</Tag>
      </div>
      <div className="mt-2">
        <H4>{question}</H4>
        {memoAllQuestions.map((memoQuestion, i) => (
          <div key={i}>
            {type === 'multiple' ? (
              <Checkbox name={`${question}-${i}`}>{memoQuestion}</Checkbox>
            ) : (
              <Radio name={`${question}-${i}`}>{memoQuestion}</Radio>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export { Question };
export default Question;
