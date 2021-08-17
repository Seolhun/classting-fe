import { APIClient } from '../API.Client';

const axios = new APIClient('https://api.ipify.org');
const QuestionAPI = {
  async getCurrentIP() {
    return axios.fetch({
      method: 'GET',
      withCredentials: false,
    });
  },
};

export { QuestionAPI };
export default { QuestionAPI };
