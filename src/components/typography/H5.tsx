import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__H5';
type ElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ExtensionProps = ElementProps;
export interface H5Props extends ExtensionProps {}

const H5: React.FC<H5Props> = ({ className, children, ...rests }) => {
  return (
    <h5
      {...rests}
      className={classnames(
        CLASSNAME,
        className,
        'text-2xl font-bold leading-normal mt-0 mb-2',
      )}
    >
      {children}
    </h5>
  );
};

export { H5 };
export default H5;
