import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__Input';
type Element = HTMLInputElement;
type ElementProps = React.InputHTMLAttributes<Element>;
type ExtensionProps = ElementProps;
export interface InputProps extends ExtensionProps {}

const Input = React.forwardRef<Element, InputProps>(
  ({ className, ...rests }, ref) => {
    return (
      <input
        {...rests}
        ref={ref}
        id={rests.name}
        className={classnames(
          CLASSNAME,
          className,
          'block',
          'w-full',
          'p-3',
          'shadow-sm',
          'border border-gray-400',
          'focus:ring-gray-800 rounded-md',
        )}
      />
    );
  },
);

export { Input };
export default Input;
