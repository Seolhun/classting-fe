import { QuestionModel } from '@/models';

export interface GenerateQuestionRequestParam {
  /**
   * @default 10
   */
  amount: number;

  category?: QuestionModel['category'];

  difficulty?: QuestionModel['difficulty'];
}
