import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
`;

const InputField = styled.input`
  width: 93.5%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid;
  border-radius:5px;
  &:hover,
  &:focus {
    border-color: #582fff;
    outline: none; // 선택 효과를 제거합니다.
  }
`;

const SocialLoginButtons = styled.div`
  display: flex;
  flex-direction: column;  // 위아래로 나타나도록 설정
  align-items: center;     // 가운데 정렬
  margin-top: 20px;
  margin-bottom: 20px;
  button {
    width: 100%;             // 버튼 너비 조절
    margin-bottom: 10px;    // 버튼 간격 조절
    padding: 10px;
    border: 3px solid transparent;
    border-radius: 5px;
    cursor: pointer;
  }
  // 카카오로 시작하기
  button:nth-child(1) {
    background-color: #ffffff;
    border: 3px solid #fde500;
    color: #181818;
  }
  // 네이버로 시작하기
  button:nth-child(2) {
    background-color: #ffffff;
    border: 3px solid #2feb00;
    color: #181818;
  }
`;

const OrDivider = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  div {
    flex: 1;
    height: 1px;
    background-color: #ccc;
    margin: 0 10px;
    margin-bottom: 10px;
  }
`;

const EmailVerificationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:10px;
  
  input{
    width: 70%;
    border: 1px solid;
    border-radius:5px;
  }

  button {
    width: 30%;
    background-color: #ffffff;
    border: 3px solid #582fff;
    padding: 10px;
    margin-left: 10px;
    color: #582fff;  // 텍스트 색상을 버튼 테두리 색상과 일치하도록 수정
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      background-color: #582fff;
    }
  }
`;
const AgreementContainer = styled.div`
  margin-bottom: 10px;
  label {
    display: block;
    margin-bottom: 5px;
    color: #000000;
  }
`;
const SignupButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top:1vw;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#582fff")};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#582fff")};
  }
`;

// 모달 스타일
const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 30px;
  z-index: 1000;
  text-align: center; // 모달 내용을 가운데 정렬
  display: flex;            // 내부 요소들을 가로로 배치
  flex-direction: column;   // 내부 요소들을 세로로 배치
  align-items: center;       // 가운데 정렬
`;

const ModalButton = styled.button`
  width: 75%;
  height: 30%;
  margin-top: 10px;
  padding: 8px;
  color:#ffffff;
  border: 1px solid #582fff;
  border-radius: 10px;
  background-color: #582fff;
`;

const ModalRadioContainer = styled.div`
  margin-top: 10px;

  p {
    color: #582fff;
    margin-bottom: 10px;
    font-size: 20px;
  }

  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    padding: 30px;
    border: 3px solid #181818;
    border-radius: 5px;
    cursor: pointer;

    // Add the following styles to change the border color of the selected radio button
    &:hover {
      border-color: #582fff;
    }

    input[type="radio"]:checked + & {
      border-color: #582fff;
    }
  }
`;

// 배경을 흐려지게 하는 스타일 추가
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); // 투명한 검은 배경
  z-index: 999;
`;

// SignupStyle.js 파일 내 WelcomeText 부분 수정
const WelcomeText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  p{
    font-size: 20px;
  }
  span {
    color: #582fff; // 변경된 부분: 원하는 색상으로 설정
    text-decoration: underline; // 밑줄 스타일 추가
  }
`;

const WelcomeText2 = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #582fff; // 변경된 부분: 원하는 색상으로 설정
`;

const CheckIcon = styled.div`
  width: 24px;  // 이미지의 너비를 증가시켰습니다.
  height: 24px; // 이미지의 높이를 증가시켰습니다.
  margin-top: 5px;
  display: flex;
  align-items: center; // 이미지를 세로 중앙 정렬
  background: url(${require('../../assets/images/check-icon.png')}) no-repeat;
  background-size: cover; // 배경 이미지 크기 설정
  text-align: center; // 체크 이미지를 가운데 정렬
  display: flex;      // flex 컨테이너로 설정
  align-items: center; // 세로 중앙 정렬 추가
`;

const BackLink = styled(Link)`
  margin-left: 200px;
  
  img {
    max-width: 3%; // 이미지의 최대 너비를 100%로 설정
    height: auto; // 비율에 맞게 자동으로 높이 조절
    margin-top: 10px;
  }
`;

// SignupStyle.js 파일 내 InputLabel 스타일 추가
const InputLabel = styled.div`
&.input-label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #000000;
`;



const SignupStyle = {
  SignupContainer,
  InputField,
  SocialLoginButtons,
  EmailVerificationContainer,
  AgreementContainer,
  SignupButton,
  OrDivider,
  Modal: ModalStyle,
  ModalButton,
  ModalRadioContainer,
  Backdrop,
  CheckIcon,
  WelcomeText,
  WelcomeText2,
  BackLink,
  InputLabel,
};

export default SignupStyle;