import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const CLASSNAME = 'SH__RootDrawer';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface RootDrawerProps extends ExtensionProps {
  onClose: (e: React.MouseEvent) => void;
}

const RootDrawer = React.forwardRef<HTMLDivElement, RootDrawerProps>(
  ({ children, className, onClose, ...rests }, ref) => {
    return ReactDOM.createPortal(
      <div
        {...rests}
        ref={ref}
        className={classnames(
          CLASSNAME,
          className,
          'fixed',
          'inset-0',
          'overflow-y-auto',
          'z-10',
        )}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={classnames(
            'flex items-end justify-center',
            'sm:block',
            'min-h-screen',
            'pt-4 px-4 pb-20 sm:p-0',
            'text-center',
          )}
        >
          {/* Shadow Overlay */}
          <div
            className={classnames(
              'fixed',
              'inset-0',
              'bg-gray-700 bg-opacity-50',
              'transition-opacity',
            )}
            aria-hidden="true"
            onClick={onClose}
          />
          <div
            className={classnames(
              'fixed top-0 right-0 bottom-0',
              'h-full w-1/3',
              'bg-white',
              'rounded-tl-lg rounded-bl-lg shadow-xl',
              'text-left',
              'transform transition-all',
              'overflow-hidden',
            )}
          >
            <div
              className={classnames(
                'h-full w-full',
                'px-4 pt-5 pb-4 sm:p-6 sm:pb-4',
                'text-gray-600',
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>,
      document.body,
    );
  },
);

export { RootDrawer };
export default RootDrawer;
