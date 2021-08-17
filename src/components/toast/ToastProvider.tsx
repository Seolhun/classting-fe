import React from 'react';
import classnames from 'classnames';
import * as uuid from 'uuid';

import { ToastCard } from './ToastCard';
import {
  ToastContext,
  ToastUniqueProps,
  ToastDispatchActionType,
} from './ToastContext';

const CLASSNAME = 'SH__Toast__Provider';
type ToastPlacementType = 'top-left' | 'top-right';

export interface ToastProviderProps {
  /**
   * @default top-right
   */
  placement?: ToastPlacementType;

  /**
   * @default 5000
   */
  timeout?: number;
}

const toastReducer: React.Reducer<ToastUniqueProps[], ToastDispatchActionType> =
  (state = [], action) => {
    const { payload, type } = action;
    switch (type) {
      case 'ADD_TOAST': {
        const newItemUK = uuid.v4();
        return [
          ...state,
          {
            ...payload,
            id: newItemUK,
            visible: true,
          },
        ];
      }
      case 'REMOVE_TOAST': {
        const toastIndex = state.findIndex((toast) => toast.id === payload);
        if (toastIndex !== -1) {
          const copiedToasts = [...state];
          copiedToasts[toastIndex] = {
            ...copiedToasts[toastIndex],
            visible: false,
          };
          return copiedToasts;
        }
        return [...state];
      }
      case 'RESET_TOASTS': {
        if (state.every((toast) => !toast.visible)) {
          return [];
        }
        return [...state];
      }
      default: {
        return [...state];
      }
    }
  };

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  placement = 'top-right',
  timeout = 5000,
}) => {
  const [toasts, dispatch] = React.useReducer(toastReducer, []);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'RESET_TOASTS',
      });
    }, 500);
  }, [JSON.stringify(toasts)]);

  return (
    <ToastContext.Provider value={[toasts, dispatch]}>
      {children}
      <section className={classnames(CLASSNAME)}>
        <div className={classnames(placement, 'relative')}>
          {toasts.map((toast, index) => (
            <ToastCard {...toast} key={index} timeout={timeout} />
          ))}
        </div>
      </section>
    </ToastContext.Provider>
  );
};

export { ToastProvider };
export default ToastProvider;
