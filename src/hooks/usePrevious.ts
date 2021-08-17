import React from 'react';
function usePrevious<T = any>(value: T) {
  const prevValueRef = React.useRef<T>();
  React.useEffect(() => {
    prevValueRef.current = value;
  });
  return prevValueRef.current;
}

export { usePrevious };
export default usePrevious;
