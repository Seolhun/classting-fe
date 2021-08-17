import React from 'react';

const useVisibleKeydown = (
  isVisible: boolean,
  onClose: (...args: any[]) => void,
  onConfirm?: (...args: any[]) => void,
) => {
  const onWatchKeydown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Enter') {
        if (onConfirm) {
          onConfirm();
        }
      }
    },
    [onClose, onConfirm],
  );

  React.useLayoutEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', onWatchKeydown);
    }
    return () => {
      document.removeEventListener('keydown', onWatchKeydown);
    };
  }, [isVisible]);
};

export { useVisibleKeydown };
export default useVisibleKeydown;
