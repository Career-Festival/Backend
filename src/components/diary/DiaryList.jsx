import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import LeftQuote from "../../assets/images/leftQuote.png";
import RightQuote from "../../assets/images/rightQuote.png";

const ListContainer = styled.div``;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`;

const DiaryContainer = styled.div`
  display: flex;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.6vw;
  border: 1px #d9d9d9 solid;
`;

const ColorContainer = styled.div`
  width: 1.5vw;
  height: 100%;
  background: #582fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
`;

const DiaryContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 25vw;
  height: 15vw;
  background: white;
  padding: 3vw 1.5vw 2vw 2.3vw;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 0.01vw;
  background: #d9d9d9;
  margin: 1vw 0 2vw 0;
`;

const EventTitleText = styled.div`
  color: black;
  font-size: 1.2vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  display: inline-block;
`;

const DateText = styled.div`
  color: black;
  font-size: 1.2vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  display: inline-block;
  float: right;
`;

const DiaryTitleText = styled.div`
  color: black;
  font-size: 1.1vw;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;
  margin-top: 1.5vw;
`;

const TypeTagContainer = styled.div`
  padding: 0.25vw 0.6vw 0.25vw 0.6vw;
  display: inline-block;

  border-radius: 1vw;
  border: 1px #838383 solid;

  color: #838383;
  font-size: 0.9vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const GenreTagContainer = styled.div`
  padding: 0.25vw 0.6vw 0.25vw 0.6vw;
  margin-left: 0.5vw;
  display: inline-block;

  border-radius: 1vw;
  border: 1px #582fff solid;

  color: #582fff;
  font-size: 0.9vw;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
`;

const HeaderContainer = styled.div`
  display: block;
`;

const TagContainer = styled.div`
  display: flex;
  margin-top: auto;
`;

const QuoteContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftQuoteImage = styled.img`
  display: inline-block;
  margin-right: 10vw;
`;

const RightQuoteImage = styled.img`
  display: inline-block;
  margin-left: 10vw;
`;

const DiaryList = () => {
  return (
    <ListContainer>
      <ContentContainer>
        <DiaryContainer>
          <ColorContainer />
          <DiaryContentContainer>
            <HeaderContainer>
              <EventTitleText>5th UMC 해커톤</EventTitleText>
              <DateText>2024.12.14</DateText>
            </HeaderContainer>
            <HorizontalDivider />
            <QuoteContainer>
              <LeftQuoteImage src={LeftQuote}></LeftQuoteImage>
              <RightQuoteImage src={RightQuote}></RightQuoteImage>
            </QuoteContainer>
            <DiaryTitleText>나의 첫 해커톤</DiaryTitleText>
            <TagContainer>
              <TypeTagContainer>학술대회</TypeTagContainer>
              <GenreTagContainer>경제/금융</GenreTagContainer>
            </TagContainer>
          </DiaryContentContainer>
        </DiaryContainer>
      </ContentContainer>
      <Pagination />
    </ListContainer>
  );
};

export default DiaryList;
