import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RecordContainer = styled.div`
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-top: 2.7vw;
  display: flex;
  flex-direction: column;
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
  min-height: 60vh;
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
}
`;

const BottomContainer = styled.div`
  display: inline-block;
  background-color: red;

  border-bottom-left-radius: 0.6vw;
  border-bottom-right-radius: 0.6vw;
`;

const CountContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  text-align: right;
  float: right;
  margin: 4vw 1vw 1.5vw 0;
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

const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  margin: 23px 0 0 0;
`;

function SeminarRecord({ onComplete }) {
  const [inputCount, setInputCount] = useState(0);
  const [isWritten, setIsWritten] = useState(false);

  const onInputHandler = (e) => {
    const count = e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length;
    setInputCount(count);
    setIsWritten(count > 100); // 여기에서 작성 여부 판별 조건을 설정
  };

  // 작성이 완료되었을 때 onComplete 호출
  useEffect(() => {
    if (isWritten) {
      console.log("작성이 완료되었습니다.");
      onComplete(true);
    } else {
      console.log("작성이 아직 완료되지 않았습니다.");
      onComplete(false);
    }
  }, [isWritten, onComplete]);

  console.log("현재 작성 여부:", isWritten);

  return (
    <RecordContainer>
      <InputContainer>
        <TitleText>행사 기록</TitleText>
        <TextInput
          placeholder="다녀온 강연/세미나 내용을 정리해주세요."
          onChange={onInputHandler}
          maxLength="5000"
        />

        <HorizontalDivider />

        <BottomContainer>
          <CountContainer>
            <CountColorText>{inputCount}</CountColorText>
            <CountText>/5000자</CountText>
          </CountContainer>
        </BottomContainer>
      </InputContainer>
      {isWritten && <div>작성이 완료되었습니다.</div>}
    </RecordContainer>
  );
}

export default SeminarRecord;
