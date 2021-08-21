import React from 'react';

import { Dayjs } from 'dayjs';

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24;

export interface UseDiffTimeResponse {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export interface UseDiffTimeProps {
  biggerDayjs: Dayjs;
  smallerDayjs: Dayjs;
  parser?: (res: UseDiffTimeResponse) => any;
}

const useDiffTime = (
  biggerDayjs: UseDiffTimeProps['biggerDayjs'],
  smallerDayjs: UseDiffTimeProps['smallerDayjs'],
): UseDiffTimeResponse => {
  const memoDiffTimes = React.useMemo<UseDiffTimeResponse>(() => {
    let diff = biggerDayjs.diff(smallerDayjs, 'second');
    const day = Math.floor(diff / SECONDS_PER_DAY);
    diff %= SECONDS_PER_DAY;
    const hour = Math.floor(diff / SECONDS_PER_HOUR);
    diff %= SECONDS_PER_HOUR;
    const minute = Math.floor(diff / SECONDS_PER_MINUTE);
    diff %= SECONDS_PER_MINUTE;
    const second = diff;

    return {
      day,
      hour,
      minute,
      second,
    };
  }, [biggerDayjs, smallerDayjs]);

  return memoDiffTimes;
};

export { useDiffTime };
export default useDiffTime;
