import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: ${({ isComplete }) => (isComplete ? "#582fff" : "#cccccc")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${({ isComplete }) => (isComplete ? "pointer" : "not-allowed")};
`;

const SubmitButton = ({ onClick, isComplete }) => {
  return (
    <Button onClick={onClick} disabled={!isComplete} isComplete={isComplete}>
      {isComplete ? "수정완료" : "수정하기"}
    </Button>
  );
};

export default SubmitButton;
