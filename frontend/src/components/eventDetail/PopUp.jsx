import React, { useState } from "react";
import styled from "styled-components";

const PopUpContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px #d9d9d9 solid;
  border-radius: 0.3rem;
  background: #d9d9d9;
  opacity: 0.85;
`;

const PopUpContent = styled.div`
  color: black;
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 0.8rem;
`;

const PopUp = ({ onClose, children }) => {
  return (
    <PopUpContainer>
      <PopUpContent>
        <button onClick={onClose}></button>
        {children}
      </PopUpContent>
    </PopUpContainer>
  );
};

export default PopUp;
