import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  width: 1223px;
  height: 100%;
  background: rgba(88.35, 46.69, 255, 0.04);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 33px 0 89px 0;
  padding: 12px 0 16px 0;

  display: block;
`;

const EmailContainer = styled.div`
  margin: 14px 0 14px 0;
`;

const ContactTitle = styled.div`
  color: #838383;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin: 0 20px 0 20px;
  display: inline-block;
`;

const ContactContent = styled.div`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  display: inline-block;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>담당자</ContactTitle>
      <ContactContent>뉴럴웍스랩</ContactContent>
      <EmailContainer>
        <ContactTitle>이메일</ContactTitle>
        <ContactContent>camp@neuralworks.io</ContactContent>
      </EmailContainer>
      <ContactTitle>연락처</ContactTitle>
      <ContactContent>01012341234</ContactContent>
    </ContactContainer>
  );
};

export default Contact;
