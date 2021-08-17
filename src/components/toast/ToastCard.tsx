import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircleIcon } from '@heroicons/react/solid';
import classnames from 'classnames';

import ToastContext, { ToastUniqueProps } from './ToastContext';

const CLASSNAME = 'SH__ToastCard';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = DivProps & ToastUniqueProps;

export interface ToastCardProps extends ExtensionProps {
  timeout: number;

  icon?: React.ReactElement;
}

const ToastCard: React.FC<ToastCardProps> = ({
  className,
  timeout,
  visible,
  id,
  title,
  message,
  icon,
  ...props
}) => {
  const timeoutRef = React.useRef<any>(null);
  const [, dispatch] = React.useContext(ToastContext);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      dispatch({
        type: 'REMOVE_TOAST',
        payload: id,
      });
    }, timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={classnames(
            CLASSNAME,
            className,
            'w-80',
            'bg-white',
            'p-2',
            'border-indigo-600 rounded shadow',
          )}
          initial={{
            x: '100%',
            opacity: 0,
          }}
          animate={{
            x: '0',
            opacity: 1,
          }}
          exit={{
            x: '120%',
            opacity: 0,
          }}
        >
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center mr-2">
              {icon && <div className="inline-flex mr-2">{icon}</div>}
              <h2
                className={classnames('truncate', 'text-xl', {
                  Icon: !!icon,
                })}
              >
                {title}
              </h2>
            </div>
            <div className="flex-initial cursor-pointer">
              <XCircleIcon
                className="h-5 w-5 text-black"
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_TOAST',
                    payload: id,
                  })
                }
              />
            </div>
          </div>
          <div className="flex">
            {message && (
              <p
                {...props}
                className={classnames(className, 'text-sm text-gray-700')}
              >
                {message}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ToastCard };
export default ToastCard;
