import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__Input';
type ElementProps = React.InputHTMLAttributes<HTMLInputElement>;
type ExtensionProps = ElementProps;
export interface InputProps extends ExtensionProps {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rests }, ref) => {
    return (
      <input
        {...rests}
        ref={ref}
        id={rests.name}
        className={classnames(
          CLASSNAME,
          className,
          'shadow-sm border border-gray-400 focus:ring-gray-800 p-3 block w-full sm:text-sm rounded-md',
        )}
      />
    );
  },
);

export { Input };
export default Input;
