import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// 컨테이너 스타일 정의
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  text-align: center;
  padding: 10vw;
`;

// 주요 제목 스타일 정의
const Main = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

// 프로그래스바 스타일 정의
const ProgressBarContainer = styled.div`
  position: relative;
  width: 25%;
  height: 0.5vw;
  background: #ddd;
  border-radius: 1vw;
  margin-top: 2vw;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background: linear-gradient(to right, #a597e7, #4632a9);
  border-radius: 1vw;
  transition: width 0.5s ease-in-out;
`;

const ProgressText = styled.div`
  text-align: start;
  font-size: 1rem;
`;

const ProgressPer = styled.div`
  text-align: end;
  font-size: 1rem;
`;

// 주최자 프로필 개설 페이지 컴포넌트
const Level3 = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  // 시뮬레이션을 위해 5초 동안 프로그래스 증가
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 20, 100));
    }, 500); // 500ms 간격으로 변경

    // 컴포넌트가 언마운트되면 interval 클리어
    return () => clearInterval(progressInterval);
  }, []);

  // 프로그래스가 100%가 되면 다음 페이지로 이동
  useEffect(() => {
    if (progress === 100) {
      const completionTimeout = setTimeout(() => {
        navigate("/register/Level4");
      }, 500);
      return () => clearTimeout(completionTimeout);
    }
  }, [progress, navigate]);

  return (
    <div>
      <Container>
        <Main>프로필을 등록 중입니다.</Main>
        <ProgressBarContainer>
          <ProgressBar progress={progress} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ProgressText>In Progress...</ProgressText>
            <ProgressPer>{progress}%</ProgressPer>
          </div>
        </ProgressBarContainer>
      </Container>
    </div>
  );
};

export default Level3;
