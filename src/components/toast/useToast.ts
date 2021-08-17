import React from 'react';
import ToastContext, { ToastProps } from './ToastContext';

const useToast = () => {
  const [, dispatch] = React.useContext(ToastContext);

  const message = (toast: ToastProps) => {
    dispatch({
      type: 'ADD_TOAST',
      payload: toast,
    });
  };
  return message;
};

export { useToast };
export default useToast;
