import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Calendar from 'react-calendar';

function ReservationCalendar(props) {
  const [date, setDate] = useState(new Date())
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const [element, setElement] = useState(0);
  const [subElement, setSubElement] = useState("");

  const handleOnClick = (e) => {
    setElement(element === e.target.value ? 0 : e.target.value)
    setSubElement("");
  }

  const handleDateOnChange = (value) => {
    setDate(value)
    setElement(0);
  }

  const handleOnClick2 = (e) => {
    setSubElement(subElement === e.target.value ? "" : e.target.value)
  }

  return (
    <>
      <div css={s.layout}>
        <Calendar
          onChange={handleDateOnChange}
          value={date}
          locale='ko'
          formatDay={(locale, date) => date.getDate()}
          calendarType='gregory'
        />
        {
          date.getDay() === 0 || date.getDay() === 6
            ?
            <></>
            :
            <>
            {
              date.getDay() === 1 || date.getDay() === 2
                ?
                <div css={s.elementsBox}>
                  <button onClick={handleOnClick} value={1}>요소1</button>
                  <button onClick={handleOnClick} value={2}>요소2</button>
                </div>
                :
                <div css={s.elementsBox}>
                  <button onClick={handleOnClick} value={3}>요소3</button>
                  <button onClick={handleOnClick} value={4}>요소4</button>
                </div>
            }
          </>
        }
        {
          element === 0
            ? <></>
            :
            <div css={s.elementsBox}>
              <button onClick={handleOnClick2} value={"요소1"} disabled={parseInt(element) === 1}>요소1</button>
              <button onClick={handleOnClick2} value={"요소2"}>요소2</button>
              <button onClick={handleOnClick2} value={"요소3"}>요소3</button>
              <button onClick={handleOnClick2} value={"요소4"}>요소4</button>
            </div>
        }
      </div>

    </>

  );
}

export default ReservationCalendar;