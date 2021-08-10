import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__H3';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export interface H3Props extends ExtensionProps {}

const H3: React.FC<H3Props> = ({ className, children, ...rests }) => {
  return (
    <h3
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'text-4xl font-bold leading-normal mt-0 mb-2',
      )}
    >
      {children}
    </h3>
  );
};

export { H3 };
export default H3;
