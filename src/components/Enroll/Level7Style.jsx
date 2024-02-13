// Level7Style.jsx
import styled, { css } from "styled-components";

export const Level7Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // 컨테이너가 화면 전체를 차지하도록 설정
  padding: 10vw;
`;
export const HL = styled.hr`
  border: 0.1px solid #838383; // 가로선 스타일 지정
  width: 100%; // 가로선이 컨테이너 전체 너비를 차지하도록 설정
  margin: 1vw 0; // 위아래 여백 추가
`;
// 다음 버튼 스타일 정의
export const NextButton = styled.button`
  margin-top: 20px;
  padding: 1vw 4vw;
  font-size: 1rem;
  background-color: #582fff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
export const PurpleTitle = styled.h1`
  color: #582fff; // 글자색을 #582fff로 지정
  font-size: 1rem;
  text-align: left; // 왼쪽 정렬
`;
export const Title = styled.h1`
  color: #000000; // 글자색을 #582fff로 지정
  font-size: 1rem;
  text-align: left; // 왼쪽 정렬
`;

export const SubTitle = styled.h1`
  color: #838383;
  font-size: 0.8rem;
  text-align: left; // 왼쪽 정렬
  margin-bottom: 20px; // 아래 여백 추가
`;

export const KeyworldOptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const KeywordButton = styled.button`
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #838383;
  background: #ffffff;
  border: 2px solid;
  border-radius: 20px;

  ${(props) =>
    props.selected &&
    css`
      border: 2px solid #582fff;
      color: #582fff;
    `};

  &:hover {
    color: #582fff;
  }
`;

export const InputFestivalName = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;
export const InputIntroduce = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;

export const FestivalInformation = styled.div`
  margin: 1vw;
`;

export const FestivalInformationInput = styled.textarea`
  margin: 1vw;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #582fff;
    outline: none;
  }
`;
