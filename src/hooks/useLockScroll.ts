import React from 'react';

const CLASSNAME = 'SH__Window__LockScroll';
const useLockScroll = (isVisible: boolean) => {
  React.useEffect(() => {
    if (isVisible) {
      document.documentElement.classList.add(CLASSNAME);
      document.body.classList.add(CLASSNAME);
    } else {
      document.documentElement.classList.remove(CLASSNAME);
      document.body.classList.remove(CLASSNAME);
    }
  }, [isVisible]);
};

export { useLockScroll };
export default useLockScroll;
