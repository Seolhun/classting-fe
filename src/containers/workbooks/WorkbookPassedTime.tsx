import React from 'react';
import { useTranslation } from 'react-i18next';

export interface WorkbookPassedTimeProps {
  day?: number;

  hour?: number;

  minute?: number;

  second?: number;
}

const WorkbookPassedTime: React.FC<WorkbookPassedTimeProps> = ({
  day,
  hour,
  minute,
  second,
  children,
}) => {
  const { t } = useTranslation();

  const isDisplayedDay = React.useMemo(() => {
    return day != null && day > 0;
  }, [day]);

  const isDisplayedHour = React.useMemo(() => {
    return hour != null && hour > 0;
  }, [hour]);

  const isDisplayedMinute = React.useMemo(() => {
    return minute != null && minute > 0;
  }, [minute]);

  const isDisplayedSecond = React.useMemo(() => {
    return second != null;
  }, [second]);

  return (
    <div className="text-gray-600">
      {isDisplayedDay && (
        <time className="mr-1">
          {t('common:time.daysOf', {
            value: day,
          })}
        </time>
      )}
      {isDisplayedHour && (
        <time className="mr-1">
          {t('common:time.hoursOf', {
            value: hour,
          })}
        </time>
      )}
      {isDisplayedMinute && (
        <time className="mr-1">
          {t('common:time.minutesOf', {
            value: minute,
          })}
        </time>
      )}
      {isDisplayedSecond && (
        <>
          <time>
            {t('common:time.secondsOf', {
              value: second,
            })}
          </time>
          {children}
        </>
      )}
    </div>
  );
};

export { WorkbookPassedTime };
export default WorkbookPassedTime;
