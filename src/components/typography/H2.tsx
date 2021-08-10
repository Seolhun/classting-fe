import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__H2';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export interface H2Props extends ExtensionProps {}

const H2: React.FC<H2Props> = ({ className, children, ...rests }) => {
  return (
    <h2
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'text-5xl font-bold leading-normal mt-0 mb-2',
      )}
    >
      {children}
    </h2>
  );
};

export { H2 };
export default H2;
