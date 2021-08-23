import React from 'react';
import classnames from 'classnames';

type ExtensionProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export type TextareaProps = ExtensionProps;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, name, rows = 8, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        id={name}
        name={name}
        className={classnames(
          className,
          'shadow-sm border border-gray-400 focus:ring-gray-800 p-3 block w-full sm:text-sm rounded-md',
        )}
        rows={rows}
      />
    );
  },
);

export { Textarea };
export default Textarea;
