<p align="middle" >
  <img width="200px;" src="./src/images/lotto_ball.png"/>
</p>
<h2 align="middle">level1 - 행운의 로또</h2>
<p align="middle">자바스크립트로 구현 하는 로또 어플리케이션</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 🔥 Projects!
명령어: cypress 여는 명령어
./node_modules\.bin\cypress open
<p align="middle">
  <img width="400" src="./src/images/lotto_ui.png">
</p>

## 리팩토링 해야 할 것들
- 상수에서 manual 관련된 상수, auto 관련 상수 따로 영역을 구분하기. json 형태로

### 🎯 step1 구입 기능

- [o ] 로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.
- 예외처리: 소비자가 숫자가 아닌 문자를 입력할 경우
- 소비자가 1000보다 적게 입력할 경우
- [o ] 로또 1장의 가격은 1,000원이다.
- [o ] 소비자는 **자동 구매**를 할 수 있어야 한다.
- [o ] 복권 번호는 번호보기 토글 버튼을 클릭하면, 볼 수 있어야 한다.


### 🎯🎯 step2 당첨 결과 기능
- 테스트 케이스
  - [o] 가격을 잘못 입력 했을때 경고 메세지가 나오는지 테스트
  - [o] 가격을 제대로 입력 했을때, 알맞은 개수의 로또를 구입했는지 테스트
  - [o] 로또가 1~45 내의 숫자 6개가 생성이 되었는지 테스트
  - [o] 로또 당첨 번호에 따라 등수를 제대로 매겼는지 테스트

-  결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.
   - 당첨 통계 세부 사항
   - [o] 당첨 번호를 입력받아 숫자 배열로 만듦.
   - [o] 숫자 배열을 바탕으로 각 당첨 등수에 해당하는 로또 개수를 찾는 알고리즘 구현
   - [] 각 당첨 등수에 해당하는 로또 개수를 보여주는 기능
   - 수익률 세부 사항
   - [o] 구입한 로또 들에 대한 수익을 계산하는 기능
   - [o] 수익률을 모달로 확인 할 수 있는 기능
      - 모달 창 관련 세부 사항 
        - [x] 모달 밖의 창을 클릭하면 모달이 닫히는 기능
- [o] 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [o] 다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.


### 🎯🎯🎯 step3 수동 구매

- [ ] 소비자는 수동 구매(스스로 구매 번호를 입력)를 할 수 있어야 한다.
  - 수동 구매를 ui
- [ ] 수동 구매 후 남는 금액이 있다면 자동으로 구매할 수 있어야 한다.
- [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-lotto/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-lotto/blob/main/LICENSE) licensed.

