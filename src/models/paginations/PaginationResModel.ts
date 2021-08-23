import { DeepPartial } from 'ts-essentials';

export type IPaginationResModel<T> = {
  totalCount: number;

  items: T[];
};

export class PaginationResModel<T = any> implements IPaginationResModel<T> {
  totalCount: number = 0;

  items: T[] = [];

  constructor(partial?: DeepPartial<IPaginationResModel<T>>) {
    Object.assign(this, partial);
  }
}
