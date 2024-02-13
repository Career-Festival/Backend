import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 10vw;
`;

const Main = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;
//보기버튼
const StyledLink = styled(Link)`
  margin-top: 10vw;
  padding: 1vw 4vw;
  font-size: 1rem;
  background-color: #582fff;
  color: #fff;
  border: none;
  text-decoration: none;
  border-radius: 0.5vw;
  cursor: pointer;
  &:hover {
    background-color: #4700a6;
  }
`;

const ProgressBarContainer = styled.div`
  width: 25%;
  height: 0.5vw;
  background: #ddd;
  border-radius: 1vw;
  margin-top: 2vw;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(88, 47, 255, 0.8),
    rgba(71, 0, 166, 0.8)
  );
  border-radius: 1vw;
`;

const ProgressText = styled.div`
  text-align: start;
  font-size: 1rem;
  color: #582fff;
`;

const ProgressPer = styled.div`
  text-align: end;
  font-size: 1rem;
  color: #838383;
`;

const Level4 = () => {
  return (
    <Container>
      <Main>주최자 프로필 등록이 완료되었습니다.</Main>
      <ProgressBarContainer>
        <ProgressBar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ProgressText>complete</ProgressText>
          <ProgressPer>100%</ProgressPer>
        </div>
      </ProgressBarContainer>
      <StyledLink to="/organization-mypage">보기</StyledLink>
    </Container>
  );
};

export default Level4;
