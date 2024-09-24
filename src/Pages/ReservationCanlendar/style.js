import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100%;
  .calendar-container {
  width: 1000px;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #ffffff;
  font-weight: 600;
}

.react-calendar {
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
}

.react-calendar__navigation {
  align-self: center;
  width: 350px;
}

.react-calendar__navigation button {
  background-color: transparent; /* 기본 배경을 투명하게 설정 */
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  font-size: 1.2rem;
  outline: none; /* 포커스 시 생기는 테두리 제거 */
  box-shadow: none; /* 그림자 제거 */
  -webkit-tap-highlight-color: transparent; /* 모바일 및 브라우저 클릭 하이라이트 제거 */
  
}
.react-calendar__month-view__weekdays__weekday {
  & * {
    text-decoration: none;
  }
}

.react-calendar__tile--now:not(.react-calendar__tile--active) {
  background-color: transparent;
  border-radius: 5px;
}

.react-calendar__tile--now:enabled:hover {
  background-color: #dbdbdb;
  border-radius: 5px;
}

.react-calendar__tile--now:focus:hover  {
  background-color: #1087ff;
  border-radius: 5px;
}

.react-calendar__tile--now.react-calendar__tile--active {
  background-color: #1087ff;
}
.react-calendar__tile:enabled:hover {
  border-radius: 5px;
}

.react-calendar__tile--active {
  border-radius: 5px;
}
`;

export const elementsBox = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 20px 0px;
  border: 1px solid #dbdbdb;
  padding: 10px;
  width: 100%;
  height: 200px;

  & button {
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 50px;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #dbdbdb;
    }

    &:active {
      background-color: #bbbbbb;
    }

    :not(:nth-of-type(1)) {
      margin-left: 10px;
    }
  }

  & button:disabled {
    background-color: #ffffff;
    cursor: default;
  }
`;