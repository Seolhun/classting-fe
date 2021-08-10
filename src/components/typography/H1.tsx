import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__H1';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export interface H1Props extends ExtensionProps {}

const H1: React.FC<H1Props> = ({ className, children, ...rests }) => {
  return (
    <h1
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'text-6xl font-bold leading-normal mt-0 mb-2',
      )}
    >
      {children}
    </h1>
  );
};

export { H1 };
export default H1;
