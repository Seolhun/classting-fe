import { atom } from 'recoil';

import { WorkbookGeneratorModel, WorkbookModel } from '@/models';

export const workbookGeneratorState = atom<WorkbookGeneratorModel>({
  key: 'workbookGeneratorState',
  default: {
    amount: 10,
    category: undefined,
    difficulty: undefined,
    type: undefined,
    name: '',
  },
});

export const workbookState = atom<WorkbookModel>({
  key: 'workbookState',
  default: {
    id: -1,
    response_code: -1,
    results: [],
  },
});

export const workbookListState = atom<WorkbookModel[]>({
  key: 'workbookState',
  default: [],
});
