import { atom, selector } from 'recoil';

import { WorkbookGeneratorModel, WorkbookModel } from '@/models';

export const workbookGeneratorState = atom<WorkbookGeneratorModel>({
  key: 'workbookGeneratorState',
  default: {
    amount: 10,
    category: undefined,
    difficulty: undefined,
    type: undefined,
  },
});

export const workbookListState = atom<WorkbookModel[]>({
  key: 'workbookListState',
  default: [],
});

export const workbookListSelector = selector<WorkbookModel[]>({
  key: 'workbookListSelector',
  set: ({ set }, nextWorkbookList) => {
    return set(workbookListState, nextWorkbookList);
  },
  get: ({ get }) => {
    const workbookList = get(workbookListState);
    return workbookList;
  },
});
