import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const MenuContainer = styled.div`
  width: 100%;
  height: 20px; //임시
  margin: 53px 0 19px 0;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: 0;

  margin-right: 40px;

  color: #838383;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${({ active }) =>
    active &&
    css`
      color: #582fff;
    `}
`;

function Menu() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  useEffect(() => {
    setActiveButton(0);
  }, []);

  return (
    <MenuContainer>
      <MenuButton
        active={activeButton === 0}
        onClick={() => handleButtonClick(0)}
      >
        행사소개
      </MenuButton>
      <MenuButton
        active={activeButton === 1}
        onClick={() => handleButtonClick(1)}
      >
        행사위치
      </MenuButton>
      <MenuButton
        active={activeButton === 2}
        onClick={() => handleButtonClick(2)}
      >
        문의하기
      </MenuButton>
      <MenuButton
        active={activeButton === 3}
        onClick={() => handleButtonClick(3)}
      >
        같이가요!
      </MenuButton>
      <MenuButton
        active={activeButton === 4}
        onClick={() => handleButtonClick(4)}
      >
        참석예정자
      </MenuButton>
    </MenuContainer>
  );
}

export default Menu;
