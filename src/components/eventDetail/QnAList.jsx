import React, { useState } from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 74px 0 18px 0;
`;

const QnAListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

const QnAContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom: 25px;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

const Subtitle = styled.span`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin-left: 3px;
`;

const SubtitleColor = styled.span`
  color: #582fff;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const UserNameText = styled.span`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin-right: 5px;
`;

const DateText = styled.span`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin-right: 5px;
`;

const AnswerText = styled.span`
  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const ContentText = styled.span`
  color: #838383;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const QnAList = () => {
  return (
    <div>
      <TitleContainer>
        <SubtitleColor>2</SubtitleColor>
        <Subtitle>개의 문의</Subtitle>
      </TitleContainer>

      <QnAListContainer>
        <QnAContainer>
          <InfoContainer>
            <UserNameText>최**</UserNameText>
            <DateText>2023/12/25</DateText>
            <AnswerText>미답변</AnswerText>
          </InfoContainer>
          <ContentText>사용자가 비공개처리 했습니다.</ContentText>
        </QnAContainer>

        <QnAContainer>
          <InfoContainer>
            <UserNameText>김**</UserNameText>
            <DateText>2023/12/29</DateText>
            <AnswerText>답변완료</AnswerText>
          </InfoContainer>
          <ContentText>고등학생도 참가 가능한가요?</ContentText>
        </QnAContainer>
      </QnAListContainer>
    </div>
  );
};

export default QnAList;
