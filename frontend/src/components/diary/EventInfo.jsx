// EventInfo.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  margin-top: 2.7vw;
`;

const TitleText = styled.div`
  color: black;
  font-size: 1.4vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const TextInput = styled.textarea`
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
  padding: 0.5vw 0 0 1vw;

  &::placeholder {
    color: #838383;
    font-size: 1vw;
    font-family: "Noto Sans KR";
    font-weight: 400;
  }
`;

const EventInfo = ({ onInfoComplete }) => {
  const [eventName, setEventName] = useState("");
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleInputChange = (inputType, value) => {
    switch (inputType) {
      case "eventName":
        setEventName(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "eventDate":
        setEventDate(value);
        break;
      case "keywords":
        setKeywords(value);
        break;
      default:
        break;
    }
  };

  const checkInfoComplete = () => {
    return eventName && title && eventDate && keywords;
  };

  const handleBlur = () => {
    const isComplete = checkInfoComplete();
    onInfoComplete(isComplete);
  };

  return (
    <InfoContainer>
      <InputContainer>
        <TitleText>행사 정보</TitleText>
        <TextInput
          placeholder="행사명을 입력해주세요."
          onChange={(e) => handleInputChange("eventName", e.target.value)}
          onBlur={handleBlur}
        />
        <TextInput
          placeholder="글의 제목을 입력해주세요."
          onChange={(e) => handleInputChange("title", e.target.value)}
          onBlur={handleBlur}
        />
      </InputContainer>

      <InputContainer>
        <TitleText>행사 일자</TitleText>
        <Calendar />
      </InputContainer>

      <InputContainer>
        <TitleText>행사 커리어 키워드</TitleText>
        <TextInput
          placeholder="행사 명"
          onChange={(e) => handleInputChange("keywords", e.target.value)}
          onBlur={handleBlur}
        />
      </InputContainer>
    </InfoContainer>
  );
};

export default EventInfo;
