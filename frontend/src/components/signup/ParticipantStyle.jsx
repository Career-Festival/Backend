// ParticipantStyle.js

import styled,{ css } from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e3dcff;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const Subtitle2 = styled.p`
  font-size: 14px;
  margin-bottom: 40px;
  color: #838383;
`;

const Gender = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  input[type="radio"] {
    margin-right: 5px;
  }
  input[type="radio"][value="male"] {
    margin-left: 10px; /* 남성 라디오버튼에 추가된 마진값 */
  }
  input[type="radio"][value="female"] {
    margin-left: 40px; /* 여성 라디오버튼에 추가된 마진값 */
  }
`;

const Age = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 180px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
  }
`;

const EmailInput = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 180px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
  }
`;

const TelInput = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 180px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
  }
`;

const AffiliationInput = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input {
    width: 180px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
  }
`;

const KeyworldOptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const KeywordButton = styled.button`
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

const TwoButton = styled.div`
  display: flex;
  justify-content: center;  // 가로 중앙 정렬
  align-items: center;  // 세로 중앙 정렬
  gap: 2vw;  // 버튼 사이의 간격 조절
  padding: 2vw;
`;

const LaterSave = styled.button`
  background-color: #d9d9d9;
  color: #582fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #c1c1c1;
  }

`;

const Save = styled.button`
  background-color: #582fff;
  color: #ffffff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #4018cc;
  }
`;


export {
  Container,
  Title,
  Subtitle,
  Subtitle2,
  Gender,
  Age,
  EmailInput,
  TelInput,
  AffiliationInput,
  KeyworldOptionList,
  KeywordButton,
  TwoButton,
  LaterSave,
  Save,
};