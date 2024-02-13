// 디자인이 아직 안나온듯?
// src/components/home/Diary.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DiaryIntro from "./DiaryIntro";
import DiaryList from "./DiaryList";

const DiaryContainer = styled.div`
  margin: 8vw 18vw 8vw 18vw;
`;

const TitleContainer = styled.div`
  margin-bottom: 2vw;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.01vw;
  background: #d9d9d9;
  margin: 4vw 0 3vw 0;
`;

const AddDiaryButton = styled(Link)`
  background-color: transparent;
  border: 0;
  float: right;

  color: #582fff;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  text-decoration: none;
  display: inline-block;
`;

const TitleText = styled.div`
  color: black;
  font-size: 1.4vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  display: inline-block;
`;

const Diary = () => {
  return (
    <DiaryContainer>
      <DiaryIntro />
      <HorizontalDivider />
      <TitleContainer>
        <TitleText>나의 기록장</TitleText>
        <AddDiaryButton to="/diary/LectureSeminar">추가하기</AddDiaryButton>
      </TitleContainer>
      <DiaryList />
    </DiaryContainer>
  );
};

export default Diary;
