import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__H4';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export interface H4Props extends ExtensionProps {}

const H4: React.FC<H4Props> = ({ className, children, ...rests }) => {
  return (
    <h4
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'text-3xl font-bold leading-normal mt-0 mb-2',
      )}
    >
      {children}
    </h4>
  );
};

export { H4 };
export default H4;
