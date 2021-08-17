import { IApiResponse } from './APIResponses';

export interface APIExceptionProps<T> {
  message: string;

  data?: IApiResponse<T>['data'];

  ok?: IApiResponse<T>['ok'];

  status?: IApiResponse<T>['status'];

  validations?: IApiResponse<T>['validations'];

  timestamp?: IApiResponse<T>['timestamp'];

  path?: IApiResponse<T>['path'];
}

class APIException<T = any> {
  message: APIExceptionProps<T>['message'];
  data?: APIExceptionProps<T>['data'];
  ok?: APIExceptionProps<T>['ok'];
  status?: APIExceptionProps<T>['status'];
  validations?: APIExceptionProps<T>['validations'];
  timestamp?: APIExceptionProps<T>['timestamp'];
  path?: APIExceptionProps<T>['path'];

  constructor({
    data = null,
    message,
    status = 500,
    ok = false,
    validations,
    timestamp,
    path,
  }: APIExceptionProps<T>) {
    this.data = data;
    this.message = message;
    this.status = status;
    this.ok = ok;
    this.validations = validations;
    this.timestamp = timestamp;
    this.path = path;
  }
}

export { APIException };
export default APIException;
