import axios, {
  AxiosInstance,
  CancelTokenStatic,
  AxiosRequestConfig,
} from 'axios';
import { ApiResponse } from './APIResponses';
import { APIException } from './APIException';

export interface APIClientProps {
  baseURL: string;

  version: string;

  defaultHeaders: any;

  client: AxiosInstance;
}

export interface APIClientError {
  message: string;

  statusCode: number;
}

/**
 * @see https://github.com/axios/axios#request-config
 */
class APIClient implements APIClientProps {
  baseURL: string;

  version: string;

  defaultHeaders: any;

  client: AxiosInstance;

  cancelToken: CancelTokenStatic;

  constructor(baseURL: string, version = '') {
    this.baseURL = baseURL;
    this.version = version;
    this.defaultHeaders = {};
    this.cancelToken = axios.CancelToken;
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        ...this.defaultHeaders,
      },
      withCredentials: true,
      responseType: 'json',
      validateStatus: (status: number) => {
        return status < 500;
      },
    });
  }

  /**
   * TODO: Data has null because of api fetch error.
   */
  async fetch<T = any>(option: AxiosRequestConfig): Promise<ApiResponse<T>> {
    let response;
    const cancelTokenSource = this.cancelToken.source();
    try {
      response = await this.client.request<T>(option);
    } catch (e) {
      cancelTokenSource.cancel();
      response = new APIException(e);
    }
    return response.data;
  }

  setBaseURL(baseURL: string) {
    this.baseURL = baseURL;
    return this;
  }

  setVersion(version: string) {
    this.version = version;
    return this;
  }
}

export { APIClient };
export default APIClient;
