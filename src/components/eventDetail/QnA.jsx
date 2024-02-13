import React, { useState } from "react";
import styled from "styled-components";

const QnAContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 124px 0 0 0;
  display: block;
`;

const AskContainer = styled.div`
  width: 1224px;
  height: 100%;
  border-radius: 10px;
  border: 1px #838383 solid;
  margin: 24px 0 42px 0;
`;

const UserContainer = styled.div`
  width: 100%;
  height: 23px;
  margin: 29px 0 0 25px;
`;

const AskContentContainer = styled.textarea`
  width: 1180px;
  min-height: 99px;
  border-radius: 10px;
  border: 3px #838383 solid;
  margin: 9px 19px 0 24px;

  &::placeholder {
    color: #838383;
    font-size: 14px;
    font-family: "Noto Sans KR";
    font-weight: 400;
    padding: 17px 0 0 15px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
`;

const CountContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 27px 11px 8px 950px;
`;

const ReplyContainer = styled.div`
  width: 203px;
  background: #020d6a;
  border-bottom-right-radius: 10px;
  margin-left: 11px;

  color: white;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  margin: 23px 0 0 0;
`;

const Subtitle = styled.div`
  color: black;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const UserName = styled.span`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  text-decoration: underline;
`;

const QnAText = styled.span`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin-left: 3px;
`;

const CountText = styled.span`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const CountColorText = styled.span`
  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const QnA = () => {
  let [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(
      e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
    );
  };

  return (
    <QnAContainer>
      <Subtitle>문의하기</Subtitle>
      <AskContainer>
        <UserContainer>
          <UserName>김커리</UserName>
          <QnAText>님</QnAText>
        </UserContainer>
        <AskContentContainer
          placeholder="행사와 관련된 문의를 자유롭게 남겨보세요!"
          onChange={onInputHandler}
          maxLength="500"
        />

        <HorizontalDivider />

        <BottomContainer>
          <CountContainer>
            <CountColorText>{inputCount}</CountColorText>
            <CountText>/500자</CountText>
          </CountContainer>
          <ReplyContainer>댓글 등록</ReplyContainer>
        </BottomContainer>
      </AskContainer>
    </QnAContainer>
  );
};

export default QnA;
