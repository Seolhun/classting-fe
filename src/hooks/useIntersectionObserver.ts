import React from 'react';

export function useIntersectionObserver(
  ref: React.MutableRefObject<Element | null>,
  options: IntersectionObserverInit = {},
  forward: boolean = true,
) {
  const observerRef = React.useRef<null | IntersectionObserver>(null);
  const [element, setElement] = React.useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const cleanObserver = React.useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, [observerRef]);

  React.useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  React.useEffect(() => {
    if (!element) {
      return;
    }
    cleanObserver();
    const observer = (observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        if (!forward) {
          setIsIntersecting(isElementIntersecting);
        } else if (forward && !isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting);
          cleanObserver();
        }
      },
      { ...options },
    ));
    observer.observe(element);
    return () => {
      cleanObserver();
    };
  }, [element, options]);

  return isIntersecting;
}
