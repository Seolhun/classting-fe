import React from 'react';
import classnames from 'classnames';
import FormLabel, { FormLabelProps } from './FormLabel';
import FormHelp from './FormHelp';

type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface FormWrapperProps extends ExtensionProps {
  /**
   * Form label
   */
  label?: string;

  /**
   * Form label htmlfor
   */
  htmlFor?: FormLabelProps['htmlFor'];

  /**
   * Form help
   */
  help?: string;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  label,
  htmlFor,
  help,
  className,
  children,
  ...props
}) => {
  return (
    <div {...props} className={classnames(className, 'SH__FormWrapper')}>
      {label && (
        <FormLabel className="mb-2" htmlFor={htmlFor}>
          {label}
        </FormLabel>
      )}
      {children}
      {help && <FormHelp className="mt-2">{help}</FormHelp>}
    </div>
  );
};

export { FormWrapper };
export default FormWrapper;
