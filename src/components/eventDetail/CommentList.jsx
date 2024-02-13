import React, { useState } from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 59px 0 24px 0;
`;

const CommentListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

const CommentContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px #d9d9d9 solid;
  display: block;
  margin-bottom: 31px;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

const Subtitle = styled.span`
  color: black;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const SubtitleColor = styled.span`
  color: #582fff;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const TitleText = styled.div`
  color: #838383;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  margin: 14px 0 0 18px;
`;

const ContentText = styled.div`
  color: black;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 400;
  word-wrap: break-word;
  margin: 18px 0 0 18px;
`;

const AnswerText = styled.span`
  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const CommentList = () => {
  return (
    <div>
      <TitleContainer>
        <SubtitleColor>3개</SubtitleColor>
        <Subtitle>의 답변</Subtitle>
      </TitleContainer>

      <CommentListContainer>
        <CommentContainer>
          <TitleText>1월 14일 14시, 강남역 2번 출구 앞, 4명</TitleText>
          <ContentText>https://open.kakao.com/</ContentText>
        </CommentContainer>
      </CommentListContainer>
    </div>
  );
};

export default CommentList;
