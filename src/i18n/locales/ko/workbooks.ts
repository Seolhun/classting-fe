export default {
  start: '퀴즈 풀기',
  reset: '재설정',
  prev: '이전 문항',
  next: '다음 문항',
  submit: '제출',
  finish: '완료',
  retry: '다시 풀기',
  answer: '정답',
  wrongAnswer: '오답',
  answerRatio: '정답률',
  takenTime: '소요 시간',
  name: {
    label: '문제집 이름',
    placeholder: '문제집을 이름을 주면 구분하기 쉬워집니다.',
  },
  amount: {
    label: '문제 개수',
  },
  categories: {
    label: '문제 종류',
    /**
     * @see QuestionModel.ts
     */
    ANY_CATEGORY: '모든 카테고리',
    GENERAL_KNOWLEDGE: '일반 지식',
    ENTERTAINMENT_BOOKS: '엔터테인먼트: 책',
    ENTERTAINMENT_FILM: '엔터테인먼트: 필름',
    ENTERTAINMENT_MUSIC: '엔터테인먼트: 음악',
    ENTERTAINMENT_MUSICALS_THEATRES: '엔터테인먼트: 뮤지컬 & 극장',
    ENTERTAINMENT_TELEVISION: '엔터테인먼트: 텔레비전',
    ENTERTAINMENT_VIDEO_GAMES: '엔터테인먼트: 비디오 게임',
    ENTERTAINMENT_BOARD_GAMES: '엔터테인먼트: 보드 게임',
    SCIENCE_NATURE: '과학 & 자연',
    SCIENCE_COMPUTERS: '과학: 컴퓨터 ',
    SCIENCE_MATHEMATICS: '과학: 수학',
    MYTHOLOGY: '신화학',
    SPORTS: '스포츠',
    GEOGRAPHY: '지리학',
    HISTORY: '역사',
    POLITICS: '정치',
    ART: '미술',
    CELEBRITIES: '연예인',
    ANIMALS: '동물',
    VEHICLES: '차량',
    ENTERTAINMENT_COMICS: '엔터테인먼트: 만화',
    SCIENCE_GADGETS: '과학 가제트',
    ENTERTAINMENT_JAPANESE_ANIME_MANGA: '엔터테인먼트: 일본 애니메이션 만화',
    ENTERTAINMENT_CARTOON_ANIMATIONS: '엔터테인먼트: 만화 애니메이션',
  },
  difficulties: {
    label: '난이도',
    /**
     * @see QuestionModel.ts
     */
    any: '모든 난이도',
    easy: '쉬움',
    medium: '보통',
    hard: '어려움',
  },
  type: {
    label: '문제 유형',
    /**
     * @see QuestionModel.ts
     */
    any: '모든 유형',
    multiple: '객관식',
    boolean: '예 / 아니오',
  },
  state: {
    completed: '제출이 완료된 문제집입니다.',
    retry: '문제를 다시 풀고 싶으시면 다시 풀기를 눌러주세요.',
    tags: {
      done: '완료',
      ing: '미완료',
    },
  },
  inValid: {
    noData: '유효한 문제집이 없습니다.',
  },
  thingsOf: '{{value}}문제',
  answerOf: '{{value}}정답',
};
