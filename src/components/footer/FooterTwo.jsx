import React from "react";
import styled from "styled-components";
import IDcard from "../../assets/images/IDcard.png";
import CF from "../../assets/images/CareerFestival.png";

const Main = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  width: 100%;
  height: 4vh; /* 높이 조절, 필요에 따라 변경하세요 */
  padding: 2vw;
  font-size: 3rem;
  font-weight: 800;
  color: #582fff;
  border: 1px solid none;
`;

const LogoImage = styled.img`
  display: flex;
  cursor: pointer;
  width: 2vw;
  height: 3.5vw;
  margin-right: 1vw;
`;

const TitleImage = styled.img`
  display: flex;
  cursor: pointer;
  width: 20%;
  margin-right: 1vw;
`;

const FooterTwo = () => {
  return (
    <div>
      <Main>
        <LogoImage src={IDcard} alt="logo" />
        <TitleImage src={CF} alt="CareerFestival" />
      </Main>
    </div>
  );
};

export default FooterTwo;
