import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import SeminarRecord from "./SeminarRecord";
import PeopleNetwork from "./PeopleNetwork";
import SubmitButton from "./SubmitButton";

const LectureSeminarContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function LectureSeminar() {
  const [isEventInfoComplete, setEventInfoComplete] = useState(false);
  const [isPeopleNetworkComplete, setPeopleNetworkComplete] = useState(false);
  const [isSeminarRecordComplete, setIsSeminarRecordComplete] = useState({
    isComplete: false,
    missingInputs: [],
  });

  const handleEventInfoComplete = (isComplete) => {
    setEventInfoComplete(isComplete);
  };

  const handlePeopleNetworkComplete = (isComplete) => {
    setPeopleNetworkComplete(isComplete);
  };

  const handleSeminarRecordComplete = (isComplete) => {
    setIsSeminarRecordComplete(isComplete);
  };


  return (
    <LectureSeminarContainer>
      LectureSeminar
      <br />
      <Dropdown />
      <EventInfo onInfoComplete={handleEventInfoComplete} />
      <SeminarRecord onComplete={handleSeminarRecordComplete} />
      <PeopleNetwork onComplete={handlePeopleNetworkComplete} />
      <div className="centered">
        <SubmitButton
          isComplete={
            isEventInfoComplete && isPeopleNetworkComplete && isSeminarRecordComplete
          }
        />
      </div>
    </LectureSeminarContainer>
  );
}

export default LectureSeminar;
