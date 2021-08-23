import React from 'react';
import classnames from 'classnames';

const CLASSNAME = 'SH__Loader';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export type LoaderProps = ExtensionProps;

const Loader: React.FC<LoaderProps> = ({ className, ...rests }) => {
  return (
    <div {...rests} className={classnames(CLASSNAME, className)}>
      <div className="ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  );
};

export { Loader };
export default Loader;
