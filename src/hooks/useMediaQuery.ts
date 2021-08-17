import React from 'react';

import { MediaQueryEnum } from '@/constants';

function useMediaQuery(query: MediaQueryEnum) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export { useMediaQuery };
export default useMediaQuery;
