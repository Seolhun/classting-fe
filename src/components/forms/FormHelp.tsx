import React from 'react';
import classnames from 'classnames';

type ElementProps = React.HTMLAttributes<HTMLParagraphElement>;
type ExtensionProps = ElementProps;
export type FormHelpProps = ExtensionProps;

const FormHelp: React.FC<FormHelpProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={classnames(className, 'mt-2 text-sm text-gray-500')}
    >
      {children}
    </p>
  );
};

export { FormHelp };
export default FormHelp;
