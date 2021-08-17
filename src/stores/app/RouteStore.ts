import { atom, selector } from 'recoil';

export const currentPathState = atom<string>({
  key: 'currentPathState',
  default: '',
});

export const currentPathSelector = selector<string>({
  key: 'currentPathSelector',
  set: ({ set }, nextPath) => {
    return set(currentPathState, nextPath);
  },
  get: ({ get }) => {
    const currentPath = get(currentPathState);
    return currentPath;
  },
});
