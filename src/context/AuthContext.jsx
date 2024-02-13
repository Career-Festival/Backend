// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 생성
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userName) => {
    // 로그인 로직을 추가할 수 있습니다.
    setIsLoggedIn(true);
    // 사용자 정보를 설정하는 로직도 추가 가능
    setUser({ name: userName });
  };

  const logout = () => {
    // 로그아웃 로직을 추가할 수 있습니다.
    setIsLoggedIn(false);
    // 사용자 정보 초기화
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth 커스텀 훅 생성
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 안에서 사용되어야 합니다.");
  }
  return context;
};
