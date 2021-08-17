import React from 'react';
import classnames from 'classnames';

import { createColorByIntent } from '@/utils';
import { IntentType } from '@/types';

const CLASSNAME = 'SH__ProgressBar';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface ProgressBarProps extends ExtensionProps {
  /**
   * Percentage
   * @default 0
   */
  progress?: number;

  /**
   * Badge
   */
  badge?: React.ReactNode;

  /**
   * Color Intent
   */
  intent?: IntentType;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  children,
  className,
  badge,
  progress = 0,
  intent = 'primary',
  ...rests
}) => {
  return (
    <div {...rests} className={classnames(CLASSNAME, className)}>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          {badge && (
            <div>
              <span
                className={classnames(
                  'inline-block',
                  'py-1 px-2',
                  'text-xs font-semibold rounded-full',
                  `${createColorByIntent(intent, 600, 'text')}`,
                  `${createColorByIntent(intent, 200, 'bg')}`,
                )}
              >
                {badge}
              </span>
            </div>
          )}
          <div className="text-right">
            <span
              className={classnames(
                'inline-block',
                'text-xs font-semibold',
                `${createColorByIntent(intent, 600, 'text')}`,
              )}
            >
              {`${progress}%`}
            </span>
          </div>
        </div>
        <div
          className={classnames(
            'flex',
            'h-2 mb-4',
            'text-xs rounded',
            'overflow-hidden',
            `${createColorByIntent(intent, 200, 'bg')}`,
          )}
        >
          <div
            className={classnames(
              'flex flex-col justify-center',
              'text-center whitespace-nowrap',
              'shadow-none',
              'text-white',
              'transition-all',
              `${createColorByIntent(intent, 500, 'bg')}`,
            )}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { ProgressBar };
export default ProgressBar;
