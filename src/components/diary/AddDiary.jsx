import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";

const AddDiaryContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;
`;

function AddDiary() {
  return (
    <AddDiaryContainer>
      <Dropdown />
      <EventInfo />
    </AddDiaryContainer>
  );
}

export default AddDiary;
