import qs from 'query-string';

import { APIClient } from '../APIClient';
import { GenerateQuestionRequestParam } from './QuestionAPI.Request';
import { GenerateQuestionResponse } from './QuestionAPI.Response';

const axios = new APIClient('https://opentdb.com/api.php');
const QuestionAPI = {
  async generateQuestionList(
    param: GenerateQuestionRequestParam = {
      amount: 10,
    },
  ) {
    return axios.fetch<GenerateQuestionResponse>({
      url: qs.stringify(param),
      method: 'GET',
    });
  },
};

export { QuestionAPI };
export default { QuestionAPI };
