import React from 'react';
import classnames from 'classnames';

import { Loader } from './Loader';

const CLASSNAME = 'SH__LoaderOverlay';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface OverlayLoaderProps extends ExtensionProps {
  loading: boolean;

  message?: React.ReactNode;
}

const OverlayLoader: React.FC<OverlayLoaderProps> = ({
  children,
  className,
  loading,
  message,
  ...rests
}) => {
  return (
    <>
      {loading && (
        <div {...rests} className={classnames(CLASSNAME, className)}>
          <div
            className={classnames(
              'fixed top-0 left-0 right-0 bottom-0',
              'flex flex-col items-center justify-center',
              'w-full h-full',
              'opacity-75',
              'overflow-hidden',
              'z-50',
            )}
          >
            <Loader />
            <h2
              className={classnames(
                'mt-2',
                'text-xl font-semibold text-white',
                'text-center',
              )}
            >
              Loading...
            </h2>
            {message && (
              <p className={classnames('w-1/3', 'text-white', 'text-center')}>
                {message}
              </p>
            )}
          </div>
        </div>
      )}
      {!loading && children}
    </>
  );
};

export { OverlayLoader };
export default OverlayLoader;
