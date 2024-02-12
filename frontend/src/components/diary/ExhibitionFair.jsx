import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import EventInfo from "./EventInfo";
import FestivalHistory from "./FestivalHistory";
import PeopleNetwork from "./PeopleNetwork";
import SubmitButton from "./SubmitButton";

const ExhibitionFairContainer = styled.div`
  margin: 3.5vw 23vw 3vw 23vw;

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

function ExhibitionFair() {
  const [isFestivalHistoryComplete, setFestivalHistoryComplete] = useState(false);
  const [isEventInfoComplete, setEventInfoComplete] = useState(false);
  const [isPeopleNetworkComplete, setPeopleNetworkComplete] = useState(false);

  const handleFestivalHistoryComplete = (isComplete) => {
    setFestivalHistoryComplete(isComplete);
  };

  const handleEventInfoComplete = (isComplete) => {
    setEventInfoComplete(isComplete);
  };

  const handlePeopleNetworkComplete = (isComplete) => {
    setPeopleNetworkComplete(isComplete);
  };

  return (
    <ExhibitionFairContainer>
      택신<br/>
      ExhibitionFair<br/>
      <Dropdown />
      <EventInfo onInfoComplete={handleEventInfoComplete} />
      <FestivalHistory onComplete={handleFestivalHistoryComplete} />
      <PeopleNetwork onComplete={handlePeopleNetworkComplete} />
      <div className="centered">
        <SubmitButton
          isComplete={
            isFestivalHistoryComplete &&
            isEventInfoComplete &&
            isPeopleNetworkComplete
          }
        />
      </div>
    </ExhibitionFairContainer>
  );
}

export default ExhibitionFair;
