import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const CLASSNAME = 'SH__RootModal';
type ElementProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = ElementProps;
export interface RootModalProps extends ExtensionProps {
  onClose: (e: React.MouseEvent) => void;
}

const RootModal = React.forwardRef<HTMLDivElement, RootModalProps>(
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
          <span
            className={classnames(
              'hidden',
              'sm:h-screen',
              'sm:inline-block',
              'sm:align-middle',
            )}
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className={classnames(
              'inline-block',
              'sm:max-w-lg sm:w-full',
              'sm:my-8',
              'bg-white',
              'align-bottom sm:align-middle',
              'rounded-lg shadow-xl',
              'text-left',
              'transform transition-all',
              'overflow-hidden',
            )}
          >
            <div
              className={classnames(
                'px-4 pt-5 pb-4 sm:p-6 sm:pb-4',
                'text-gray-600',
                'bg-white',
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

export { RootModal };
export default RootModal;
