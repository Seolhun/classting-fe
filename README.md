# classting-fe

To Build Simple QnA React App

## 요구사항

### 필수구현

- [x] 사용자는 '퀴즈풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다
- [ ] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
  - [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.
  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [x] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [x] 퀴즈를 마칠 때까지 소요된 시간
  - [x] 정답 개수
  - [x] 오답 수

### 추가구현

- [x] 정 오답에 대한 비율을 차트로 표기
- [x] 다시 풀기
- [ ] 오답 노트

### 테스트 작성

컴포넌트에 대한 테스트를 작성해주세요. 100% Coverage를 달성할 필요는 없습니다. (컴포넌트에 대한 테스트 코드 지향)

### 백엔드 API

[https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)

### 기타사항

정오답 기록에는 클라이언트 저장소를 사용해도 충분하고, 경우에 따라 Firebase 같은 플랫폼을 사용하여도 무방

## 결과물

- 구현 결과물을 확인할 수 있는 GitHub 주소
- 결과물을 실행해 볼수 있는 URL

---

## How to run

### Dev

```bash
npm run start:dev
```

### Production

```bash
npm run start
```

#### Test

```bash
npm run test
```

#### Lint

```bash
npm run lint
npm run lint:fix
```

#### Prettier

```bash
npm run prettier
```

## Demo

[https://classting-workbook.surge.sh/#/](https://classting-workbook.surge.sh/#/)
