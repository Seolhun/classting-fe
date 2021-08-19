import React from 'react';
import classnames from 'classnames';

import { createOptionsColorByIntent } from '@/utils';

const CLASSNAME = 'SH__Card';
type Element = HTMLDivElement;
type ElementProps = React.HTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface CardProps extends ExtensionProps {}

const Card: React.FC<CardProps> = ({ children, className, ...rests }) => {
  return (
    <div
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'block',
        'bg-white',
        'align-bottom sm:align-middle',
        'rounded-lg shadow',
        'text-left',
        'transform transition-all',
        'overflow-hidden',
        createOptionsColorByIntent('border', ['hover'], 'primary'),
      )}
    >
      <div
        className={classnames(
          'w-full h-full',
          'px-4 pt-5 pb-4 sm:p-6 sm:pb-4',
          'text-gray-600',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { Card };
export default Card;
