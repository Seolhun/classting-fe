import React from 'react';
import classnames from 'classnames';

type ElementProps = React.LabelHTMLAttributes<HTMLLabelElement>;
type ExtensionProps = ElementProps;
export type FormLabelProps = ExtensionProps;

const FormLabel: React.FC<FormLabelProps> = ({
  className,
  htmlFor,
  children,
  ...props
}) => {
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={classnames(
        className,
        'block text-base font-medium text-gray-700 mb-2',
      )}
    >
      {children}
    </label>
  );
};

export { FormLabel };
export default FormLabel;
