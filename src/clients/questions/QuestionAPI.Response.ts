import { QuestionModel } from '@/models';

export interface GenerateQuestionResponse {
  response_code: number;

  results: QuestionModel[];
}
