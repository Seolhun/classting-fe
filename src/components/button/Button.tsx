import React from 'react';
import classnames from 'classnames';

import { ColorWeight, IntentType } from '@/types';
import { createColorByIntent, createOptionsColorByIntent } from '@/utils';

const CLASSNAME = 'SH__Button';
type Element = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface ButtonProps extends ExtensionProps {
  /**
   * @default primary
   */
  intent?: IntentType;

  /**
   * @default 500
   */
  intentWeight?: ColorWeight;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, intent = 'primary', intentWeight = 500, ...rests },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        {...rests}
        className={classnames(
          CLASSNAME,
          className,
          'inline-flex items-center justify-center',
          'py-2 px-4',
          'rounded-md',
          'text-white',
          createColorByIntent(intent, intentWeight, 'bg'),
          createOptionsColorByIntent(intent, intentWeight, 'bg', ['hover']),
          createOptionsColorByIntent(intent, intentWeight, 'ring-offset', [
            'focus',
          ]),
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white',
        )}
      >
        {children}
      </button>
    );
  },
);

export { Button };
export default Button;
