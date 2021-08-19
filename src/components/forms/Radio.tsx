import React from 'react';
import classnames from 'classnames';

import { FormLabel } from '.';

const CLASSNAME = 'SH__Radio';
type Element = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<Element>;
type ExtensionProps = ElementProps;

export interface RadioProps extends ExtensionProps {
  htmlForm?: string;
}

const Radio = React.forwardRef<Element, RadioProps>(
  ({ className, children, htmlForm, ...rests }, ref) => {
    const htmlForAndID = htmlForm ?? rests.name;
    return (
      <FormLabel
        className="inline-flex items-center cursor-pointer"
        htmlFor={htmlForAndID}
      >
        <input
          {...rests}
          ref={ref}
          type="radio"
          id={htmlForAndID}
          className={classnames(
            CLASSNAME,
            className,
            'inline-block',
            'p-3 mr-1',
            'shadow-sm',
            'border border-gray-400',
            'focus:ring-gray-800 rounded-md',
          )}
        />
        <span className="ml-2">{children}</span>
      </FormLabel>
    );
  },
);

export { Radio };
export default Radio;
