import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: auto;
  color: #838383;
  font-size: 1vw;
  font-family: "Noto Sans KR";
  font-weight: 400;
  word-wrap: break-word;
  border-radius: 0.6vw;
  border: 0.1vw #838383 solid;
  margin-top: 1.2vw;
  padding: 0.5vw 2vw 0.5vw 2vw;

  &::placeholder {
    color: #838383;
    font-size: 1vw;
    font-family: "Noto Sans KR";
    font-weight: 400;
  }

  .react-datepicker__header {
    background: black; // 원하는 배경색
    color: white; // 원하는 글자색
  }
`;

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <StyledDatePicker
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      minDate={new Date("2000-01-01")}
      maxDate={new Date()}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      placeholderText="행사를 다녀온 날짜를 선택해주세요"
    />
  );
};

export default Calendar;
