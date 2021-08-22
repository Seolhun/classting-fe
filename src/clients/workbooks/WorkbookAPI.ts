import qs from 'query-string';

import { APIClient } from '../APIClient';
import { GenerateWorkbookRequestParam } from './WorkbookAPI.Request';
import { GenerateWorkbookResponse } from './WorkbookAPI.Response';

const axios = new APIClient('https://opentdb.com/api.php');
const WorkbookAPI = {
  async generateWorkbookList(
    param: GenerateWorkbookRequestParam = {
      name: '',
      amount: 10,
    },
  ) {
    return axios.fetch<GenerateWorkbookResponse>({
      url: `?${qs.stringify(param)}`,
      method: 'GET',
      withCredentials: false,
    });
  },
};

export { WorkbookAPI };
export default { WorkbookAPI };
