import React from "react";
import styled, { css } from "styled-components";

const InfoContainer = styled.div`
  width: 100%;
  margin: 27px 0 28px 0;
`;

const DateContainer = styled.div``;

const ApplyContainer = styled.div`
  margin: 19px 0 19px 0;
`;

const PriceContainer = styled.div`
  margin-bottom: 17px;
`;

const PlaceContainer = styled.div``;

const Title = styled.div`
  color: #838383;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 22px;
  display: inline-block;
`;

const Content = styled.div`
  color: black;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-block;
`;

function Info() {
  return (
    <InfoContainer>
      <DateContainer>
        <Title>일시</Title>
        <Content>01월 13일(토) 9:00~18:30</Content>
      </DateContainer>
      <ApplyContainer>
        <Title>신청</Title>
        <Content>11월 15일(수) 00:00~01월 06일(토) 3:30</Content>
      </ApplyContainer>
      <PriceContainer>
        <Title>비용</Title>
        <Content>무료</Content>
      </PriceContainer>
      <PlaceContainer>
        <Title>위치</Title>
        <Content>홍익대학교 T동 3층</Content>
      </PlaceContainer>
    </InfoContainer>
  );
}

export default Info;
