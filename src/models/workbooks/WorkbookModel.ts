import BaseModel from './BaseModel';

export type WorkbookDifficulty = 'any' | 'easy' | 'medium' | 'hard';
export type WorkbookType = 'any' | 'multiple' | 'boolean';
export enum WorkbookCategoryEnum {
  ANY_CATEGORY,
  // Categories
  GENERAL_KNOWLEDGE = 9,
  ENTERTAINMENT_BOOKS = 10,
  ENTERTAINMENT_FILM = 11,
  ENTERTAINMENT_MUSIC = 12,
  ENTERTAINMENT_MUSICALS_THEATRES = 13,
  ENTERTAINMENT_TELEVISION = 14,
  ENTERTAINMENT_VIDEO_GAMES = 15,
  ENTERTAINMENT_BOARD_GAMES = 16,
  SCIENCE_NATURE = 17,
  SCIENCE_COMPUTERS = 18,
  SCIENCE_MATHEMATICS = 19,
  MYTHOLOGY = 20,
  SPORTS = 21,
  GEOGRAPHY = 22,
  HISTORY = 23,
  POLITICS = 24,
  ART = 25,
  CELEBRITIES = 26,
  ANIMALS = 27,
  VEHICLES = 28,
  ENTERTAINMENT_COMICS = 29,
  SCIENCE_GADGETS = 30,
  ENTERTAINMENT_JAPANESE_ANIME_MANGA = 31,
  ENTERTAINMENT_CARTOON_ANIMATIONS = 32,
}
export const questionCategories = Object.keys(WorkbookCategoryEnum).filter(
  (key) => typeof WorkbookCategoryEnum[key] !== 'string',
);

export interface WorkbookModel extends BaseModel {
  id: number;

  name: string;

  response_code: number;

  results: WorkbookQuestionModel[];

  /**
   * 시작 날짜
   */
  startedAt?: string | Date;

  /**
   * 끝난 날짜
   */
  endedAt?: string | Date;
}

export interface WorkbookQuestionModel {
  category: WorkbookCategoryEnum;

  type: WorkbookType;

  difficulty: WorkbookDifficulty;

  question: string;

  correct_answer: string;

  incorrect_answers: string[];

  /**
   * 고른 정답
   */
  chosenAnswer?: string;
}

export interface WorkbookGeneratorModel {
  name: string;

  /**
   * @default 10
   */
  amount: number;

  /**
   * @default any
   */
  category?: WorkbookQuestionModel['category'];

  /**
   * @default any
   */
  difficulty?: WorkbookQuestionModel['difficulty'];

  /**
   * @default any
   */
  type?: WorkbookQuestionModel['type'];
}
