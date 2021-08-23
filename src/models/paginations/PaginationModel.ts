import { DeepPartial } from 'ts-essentials';

export type Order = 'asc' | 'desc' | -1 | 1;
export interface IPaginationModel<T> {
  /**
   * @default '''
   */
  query?: string;

  /**
   * @default 0
   * How many get items passing by?
   */
  skip?: number;

  /**
   * @default 100
   * How many get items by?
   */
  take?: number;

  /**
   * @default desc
   */
  order?: Order;

  /**
   * To Sort By Key
   */
  sortBy?: keyof T;

  /**
   * To select keys from DB
   */
  selectKeys?: (keyof T)[];

  /**
   * To Transfer Paramter
   */
  param?: DeepPartial<T>;

  /**
   * To Transfer Paramter List
   */
  params?: DeepPartial<T[]>;
}

export class PaginationModel<T = any> implements IPaginationModel<T> {
  /**
   * @default ''
   */
  query?: string = '';

  /**
   * @default 0
   * How many get items passing by?
   */
  skip?: number = 0;

  /**
   * @default 100
   * How many get items by?
   */
  take?: number = 100;

  /**
   * @default desc
   */
  order?: Order = 'desc';

  /**
   * To Sort By Key
   */
  sortBy?: keyof T;

  /**
   * To select keys from DB
   */
  selectKeys?: (keyof T)[];

  /**
   * To Transfer Paramter
   */
  param?: DeepPartial<T>;

  /**
   * To Transfer Paramter List
   */
  params?: DeepPartial<T[]>;

  constructor(partial?: DeepPartial<IPaginationModel<T>>) {
    Object.assign(this, partial);
  }
}
