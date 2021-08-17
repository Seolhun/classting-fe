import React from 'react';
import dayjs from 'dayjs';

import { Order } from '@/models';

export interface UsePaginationProps<T = any> {
  /**
   * @default 0
   */
  page?: number;

  /**
   * @default 30
   */
  perPage?: number;

  /**
   * To sort by key
   */
  sortBy?: keyof T;

  /**
   * @default desc
   */
  orderBy?: Order;

  /**
   * Subtracted 30 days from now
   */
  startDate?: dayjs.Dayjs;

  /**
   * Now
   */
  endDate?: dayjs.Dayjs;

  /**
   * @default true
   */
  hasNextPage?: boolean;
}

export interface UsePaginationResponseProps<T> {
  page: number;
  perPage: number;
  sortBy: keyof T;
  orderBy: Order;
  onChangeSortBy: (sortBy: keyof T) => { sortBy: keyof T; orderBy: Order };
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
  hasNextPage: boolean;
  onChangePagination: (pagination: Partial<UsePaginationProps<T>>) => void;
  resetPagination: () => void;
}

const DEFAULT_PROPS: Required<UsePaginationProps> = {
  page: 0,
  perPage: 100,
  sortBy: '',
  orderBy: 'desc',
  startDate: dayjs().subtract(30, 'days'),
  endDate: dayjs(),
  hasNextPage: true,
};

function usePagination<T>(
  props: UsePaginationProps = DEFAULT_PROPS,
): UsePaginationResponseProps<T> {
  const {
    page = DEFAULT_PROPS.page,
    perPage = DEFAULT_PROPS.perPage,
    sortBy = DEFAULT_PROPS.sortBy,
    orderBy = DEFAULT_PROPS.orderBy,
    startDate = DEFAULT_PROPS.startDate,
    endDate = DEFAULT_PROPS.endDate,
    hasNextPage = DEFAULT_PROPS.hasNextPage,
  } = props;

  /**
   * Pagination Variables
   */
  const [currentPage, setCurrentPage] = React.useState(page);
  const [currentPerPage, setPerPage] = React.useState(perPage);
  const [currentSortBy, setCurrentSortBy] = React.useState(sortBy);
  const [currentOrderBy, setCurrentOrderBy] = React.useState<Order>(orderBy);
  const [currentStartDate, setCurrentStartDate] = React.useState(startDate);
  const [currentEndDate, setCurrentEndDate] = React.useState(endDate);
  const [currentHasNextPage, setCurrentHasNextPage] =
    React.useState(hasNextPage);

  const resetPagination = React.useCallback(() => {
    setCurrentPage(DEFAULT_PROPS.page);
  }, []);

  React.useEffect(() => {
    return () => {
      resetPagination();
    };
  }, []);

  const onChangeSortBy = (nextSortBy: keyof T) => {
    let nextOrderBy: Order = currentOrderBy;
    if (currentSortBy === nextSortBy) {
      nextOrderBy = currentOrderBy === 'asc' ? 'desc' : 'asc';
    }
    setCurrentOrderBy(nextOrderBy);
    setCurrentSortBy(nextSortBy);

    return {
      orderBy: nextOrderBy,
      sortBy: nextSortBy,
    };
  };

  const onChangePagination = (
    nextPagination: Partial<UsePaginationProps<T>>,
  ) => {
    const { page, perPage, sortBy, startDate, endDate, hasNextPage } =
      nextPagination;
    if (hasNextPage != null) {
      setCurrentHasNextPage(hasNextPage);
    }
    if (perPage && perPage !== currentPerPage) {
      setPerPage(perPage);
    }
    if (startDate && !currentStartDate.isSame(startDate)) {
      setCurrentStartDate(startDate.clone());
    }
    if (endDate && !currentEndDate.isSame(endDate)) {
      setCurrentEndDate(endDate.clone());
    }
    if (sortBy) {
      onChangeSortBy(sortBy);
    }
    if (page && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return {
    page: currentPage,
    perPage: currentPerPage,
    sortBy: currentSortBy as keyof T,
    orderBy: currentOrderBy,
    onChangeSortBy,
    startDate: currentStartDate,
    endDate: currentEndDate,
    hasNextPage: currentHasNextPage,
    onChangePagination,
    resetPagination,
  };
}

export { usePagination };
export default usePagination;
