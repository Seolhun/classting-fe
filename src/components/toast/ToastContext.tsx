import React from 'react';

export interface ToastProps {
  /**
   * To notify title
   */
  title: string;

  /**
   * To notify message
   */
  message?: string;

  /**
   * To notify icon
   */
  icon?: React.ReactElement;
}

export interface ToastUniqueProps extends ToastProps {
  id: string;

  visible: boolean;
}

export type ToastDispatchActionNameType =
  | 'ADD_TOAST'
  | 'REMOVE_TOAST'
  | 'RESET_TOASTS';
export type ToastDispatchActionType = {
  type: ToastDispatchActionNameType;
  payload?: any;
};
export type ToastDispatchType = (action: ToastDispatchActionType) => void;
export type ToastContextProps = [ToastUniqueProps[], ToastDispatchType];

const ToastContext = React.createContext<ToastContextProps>([[], () => null]);

export { ToastContext };
export default ToastContext;
