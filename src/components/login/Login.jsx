// src/components/login/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginStyle from "./LoginStyle"; // 스타일 파일 불러오기
import Backicon from "../../assets/images/keyboard-left-arrow-button.png";
import Logo from "../../assets/images/logo.png";
import Kakao from "../../assets/images/login_kakao.png";
import Naver from "../../assets/images/login_naver.png";
import { useAuth } from "../../context/AuthContext"; // AuthContext import 추가
import {
  LoginContainer,
  Field,
  InputField,
  Label,
  Button,
  SignupText,
  Welcome,
  HelpText,
  SocialButtonContainer,
  RememberMe,
  IDFind,
  PasswordReset,
  BackLink,
} from "./LoginStyle"; // 수정된 부분

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth(); // useAuth 훅을 사용하여 login 함수 가져옴
  const navigate = useNavigate(); // useNavigate 훅 사용

// 로그인 버튼 클릭 시 호출되는 함수
const handleLogin = async () => {
  try {
    // 1. 로그인 요청 전
    console.log("1. 로그인 요청 전");

    // 서버에 로그인 정보를 전송하고 응답을 기다림
    const response = await fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });


    // 로그인 완료


    // 서버에서 받은 헤더의 모든 내용을 콘솔에 출력
    console.log("Received Headers:");
    response.headers.forEach((value, name) => {
      console.log(`${name}: ${value}`);
      if (name.toLowerCase() === 'authorization') {
        // authorization 헤더의 값을 localStorage에 저장
        localStorage.setItem("Authorization", value);
      }
    });




    // 2. 로그인 요청 후
    console.log("2. 로그인 요청 후");

    if (response.ok) {
      // 3. 서버 응답 OK
      console.log("3. 서버 응답 OK");
      console.log("3-1. 서버 응답 OK");
      console.log("Response Object:", response);

      // 백엔드에서 넘어온 유저의 이름을 헤더에서 추출
      let userName = response.headers.get("UserName");

      // 만약 UserName이 null이라면 userName으로 소문자로 바꿔서 추출
      if (!userName) {
        userName = response.headers.get("username");
      }
      
      console.log("username: ", userName);

      // 로그인 성공 시 사용자의 이름과 토큰을 alert로 보여줌
      const jwtToken = response.headers.get("Authorization");
      alert(`로그인 성공! \n현재 사용자의 토큰: ${jwtToken}`);


      // 4. 서버에 토큰을 포함하여 userName을 가져옴
      const userNameResponse = await fetch("http://localhost:9000/", {
        method: "GET",
        headers: {
          "Authorization": `${jwtToken}`,
        },
      });

      // 서버에서 받은 userName 로그 및 알림
      console.log("❤. userNameResponse:");
      console.log(userNameResponse);

      if (userNameResponse.ok) {
        const userNameData = await userNameResponse.json();
        console.log("4. 서버에서 받은 userName:", userNameData.userName);
        alert(`서버에서 받은 userName: ${userNameData.userName}`);
        // 5. useAuth 훅을 사용하여 전역적인 로그인 상태 업데이트
        login(userNameData.userName);
      } else {
        console.error("userName을 가져오지 못했습니다.", userNameResponse.statusText);
        alert(`userName을 가져오지 못했습니다.: ${userNameResponse.statusText}`);
      }

      // 5. 로컬 스토리지에 토큰 저장
      console.log("5. 로컬 스토리지에 토큰 저장");

      // 로그인 후 리다이렉트
      navigate("/");

      // 6. 리다이렉트 완료
      console.log("6. 리다이렉트 완료");
    } else {
      // 로그인 실패 시 에러 로그 출력
      console.error("로그인 실패:", response.statusText);
    }
  } catch (error) {
    // 예상치 못한 에러 발생 시 에러 로그 출력
    console.error("에러 발생:", error);
  }
};





  return (
    <>
      <br />
      <BackLink to="/"> {/* 메인 화면으로 이동하는 BackLink 컴포넌트 추가 */}
        <img src={Backicon} alt="Backicon" />
      </BackLink>
      <LoginContainer>
        <img src={Logo} alt="Logo" /> {/* 로고 이미지 추가 */}
        <Welcome>커리어 페스티벌에 오신걸 환영합니다!</Welcome>
        <Field>
          <InputField
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label for="username">이메일(ID)</Label>
        </Field>
        <Field>
          <InputField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label for="password">비밀번호</Label>
        </Field>
        <div>
          <RememberMe>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />

            <label htmlFor="rememberMe">로그인 유지</label>
          </RememberMe>
        </div>
        {/* 로그인 버튼 클릭 시 handleLogin 함수 호출 */}
        <Button onClick={handleLogin}>로그인</Button>
        <HelpText>
          <IDFind as={Link} to="/find-username">
            아이디 찾기
          </IDFind>{" "}
          |{"  "}
          <PasswordReset as={Link} to="/password-reset">
            비밀번호 찾기
          </PasswordReset>{" "}
          |{"  "}
          <SignupText as={Link} to="/join">
            회원가입
          </SignupText>
        </HelpText>
        <SocialButtonContainer>
          <img src={Kakao} alt="Login_Kakao" />
          <img src={Naver} alt="Login_Naver" />
        </SocialButtonContainer>
      </LoginContainer>
    </>
  );
};

export default Login;