import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IDcard from "../../assets/images/IDcard.png";
import { useAuth } from "../../context/AuthContext";

const LogoImage = styled.img`
  display: flex;
  width: 2vw;
  cursor: pointer;
  margin-bottom: 0.5vw;
`;

// 환영 메시지 스타일
const WelcomeText = styled.span`
  color: #582fff;
  margin-left: 1vw;
`;


// 링크 목록을 포함하는 컨테이너 스타일
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7vw;
  flex-wrap: wrap;
  box-shadow: 0 0.3vw 0.3vw rgba(0, 0, 0, 0.25);
  @media (max-width: 600px) {
    font-size: 0.8vw;
  }
`;

// 각각의 링크 아이템 스타일
const LinkItem = styled(Link)`
  color: #838383;
  text-decoration: none;
  font-weight: bold;
  margin-left: 5vw;
  transition: color 0.3s; /* 색상 변화에 대한 트랜지션 효과 추가 */

  &:hover {
    color: #582fff;
  }
`;

// 행사등록하기 링크 스타일
const RegisterItem = styled(Link)`
  color: #582fff;
  text-decoration: none;
  font-weight: bold;
  margin-left: 15vw;
  margin-right: 1vw;
  border: none;

  &:hover {
    color: #838383;
  }
`;

const VerticalLine = styled.div`
  width: 0.1vw;
  height: 1.5vw;
  background-color: #d9d9d9;
`;

const DiaryHeader = () => {
  // const [isLoggedIn] = useState(false);
  const { isLoggedIn, user } = useAuth(); // useAuth 훅을 통해 isLoggedIn, user 사용

  return (
      <LinkContainer>
        <Link to="/">
          <LogoImage src={IDcard} alt="logo" />
        </Link>
        <LinkItem to="/festival-list">행사목록</LinkItem>
        <LinkItem to="/diary">기록장</LinkItem>
        <LinkItem to="/community">커뮤니티</LinkItem>
        <LinkItem to="/mypage">마이페이지</LinkItem>
        <RegisterItem to="/register">행사등록하기</RegisterItem>
        <VerticalLine/>
        <WelcomeText>
          {isLoggedIn ? `${user.name} 님 환영합니다!` : "로그인 해주세요!"}
        </WelcomeText>
      </LinkContainer>
  );
};

export default DiaryHeader;
