export interface IApiResponse<T> {
  data: T | null;

  message?: string | Record<string, any>;

  /**
   * @default 200
   */
  status?: number;

  ok?: boolean;

  validations?: Record<string, any>;

  timestamp?: string;

  path?: string;
}

export class ApiResponse<T = any> implements IApiResponse<T> {
  data: IApiResponse<T>['data'];

  ok: IApiResponse<T>['ok'];

  status: IApiResponse<T>['status'];

  message?: IApiResponse<T>['message'];

  validations?: IApiResponse<T>['validations'];

  timestamp?: IApiResponse<T>['timestamp'];

  path?: IApiResponse<T>['path'];

  constructor({
    data = null,
    status = 200,
    ok = true,
    message = 'Success!!',
    validations,
    timestamp,
    path,
  }: IApiResponse<T>) {
    this.data = data;
    this.status = status;
    this.message = message;
    this.ok = ok;
    this.validations = validations;
    this.timestamp = timestamp;
    this.path = path;
  }
}
