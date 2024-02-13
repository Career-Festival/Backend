// src/pages/DetailFestival.jsx
import React from "react";
import styled from "styled-components";
import Enrollment from "../components/eventDetail/Enrollment";
import EventDetail from "../components/eventDetail/EventDetail";
import QnA from "../components/eventDetail/QnA";
import QnAList from "../components/eventDetail/QnAList";
import Contact from "../components/eventDetail/Contact";
import Join from "../components/eventDetail/Join";
import CommentList from "../components/eventDetail/CommentList";

const DetailFestivalPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 81px 115px 0 114px;
`;

const DetailContainer = styled.div`
  display: flex;
`;

const DetailFestivalPage = () => {
  return (
    <DetailFestivalPageContainer>
      <DetailContainer>
        <EventDetail />
        <Enrollment />
      </DetailContainer>
      <QnA />
      <QnAList />
      <Contact />
      <Join />
      <CommentList />
    </DetailFestivalPageContainer>
  );
};

export default DetailFestivalPage;
