import { QuestionModel } from '@/models';
import { atom, selector } from 'recoil';

export const questionListState = atom<QuestionModel[]>({
  key: 'questionListState',
  default: [],
});

export const questionListSelector = selector<QuestionModel[]>({
  key: 'questionListSelector',
  set: ({ set }, nextQuestionList) => {
    return set(questionListState, nextQuestionList);
  },
  get: ({ get }) => {
    const questionList = get(questionListState);
    return questionList;
  },
});
