import React, { useState } from "react";
import styled from "styled-components";

const JoinContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 157px 0 0 0;
  display: block;
`;

const AskContainer = styled.div`
  width: 1224px;
  height: 100%;
  border-radius: 10px;
  border: 1px #838383 solid;
  margin: 50px 0 42px 0;
`;

const UserContainer = styled.div`
  width: 100%;
  height: 23px;
  margin: 29px 0 0 25px;
  display: flex;
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

const ContentText = styled.div`
  color: black;
  font-size: 15px;
  font-family: "Noto Sans KR";
  font-weight: 400;
  word-wrap: break-word;
  margin: 16px 0 0 0;
`;

const UserName = styled.span`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  text-decoration: underline;
`;

const UserRole = styled.div`
  border-radius: 9.5px;
  border: 1px #582fff solid;

  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
  padding: 0 8px 0 8px;
  margin-left: 4px;
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

const Join = () => {
  let [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(
      e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
    );
  };

  return (
    <JoinContainer>
      <Subtitle>같이 가요!</Subtitle>
      <ContentText>
        같이 갈 팀원을 모집하고 싶다면 팀장이 되어 일정을 잡아보세요!
        <br />
        팀원들은 팀장의 글에 답글을 남겨 참여할 수 있습니다.
      </ContentText>
      <AskContainer>
        <UserContainer>
          <UserName>김커리</UserName>
          <QnAText>님</QnAText>
          <UserRole>팀장</UserRole>
        </UserContainer>

        <AskContentContainer
          placeholder="팀원들과 같이 갈 날짜와 시간, 장소와 인원수를 명시해주세요!  팀원들이 모일 수단을 첨부하시면 도움이 됩니다.
          예시) 1월 14일 14시, 삼각지역 9번 출구 앞, 3명, https://open.kakao.com/o/uIPzxlZf"
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
    </JoinContainer>
  );
};

export default Join;
