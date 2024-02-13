import React, { useState } from "react";
import styled from "styled-components";
import PopUp from "./PopUp";

const EnrollmentContainer = styled.div`
  width: 390px;
  height: 471px;
  margin-left: 26px;

  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InfoContainer = styled.div`
  margin: 33px 25px 31px 27px;
`;

const ReportContainer = styled.div`
  color: #582fff;
  font-size: 11px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;
  margin: 2px 0 0 0;
  display: inline-block;
  float: right;
`;

const SponsorContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

const ButtonContainer = styled.div`
  margin: 0 39px 35px 27px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`;

const Category1 = styled.div`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 18px;
  background: #838383;
  margin: 0 7px 0 7px;
  display: inline-block;
`;

const Category2 = styled.div`
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
`;

const EventTitle = styled.div`
  width: 324px;
  height: 72px;
  margin: 20px 0 0 0;

  color: black;
  font-size: 20px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const EventTag = styled.div`
  border-radius: 10px;
  border: 1px #582fff solid;

  color: #582fff;
  font-size: 14px;
  font-family: "Rubik";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
  margin: 4px 13px 0 0;
  padding: 8px 13px 8px 12px;
`;

const HorizontalDivider = styled.div`
  width: 338px;
  height: 1px;
  background: #d9d9d9;
  margin: 16px 0 0 0;
`;

const Profile = styled.div`
  width: 29px;
  height: 29px;
  background: #d9d9d9; //임시
  border-radius: 70%;
  display: inline-block;
  //overflow: hidden;
  //object-fit: cover;
  margin: 0 8px 0 0;
  align-items: flex-start;
`;

const Sponsor = styled.div`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  word-wrap: break-word;

  display: inline-block;
  align-items: flex-start;
  margin: 3px 0 0 8px;
`;

const Date = styled.div`
  color: black;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  margin: 41px 0 0 2px;
  display: inline-block;
`;

const Price = styled.div`
  color: #582fff;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  margin: 44px 14px 31px 0;
  display: inline-block;
  float: right;
`;

const ApplyButton = styled.button`
  width: 155px;
  height: 48px;
  background: #582fff;
  border-radius: 10px;
  border: none;

  color: white;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  display: inline-block;
`;

const ConfirmButton = styled.button`
  width: 155px;
  height: 48px;
  background: #582fff;
  border-radius: 10px;
  border: none;

  color: white;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;

  display: inline-block;
`;

const ShareButton = styled.button`
  width: 155px;
  height: 48px;
  background: rgba(88.35, 46.69, 255, 0.17);
  border-radius: 10px;
  border: none;

  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

const BookmarkButton = styled.button`
  width: 155px;
  height: 48px;
  background: rgba(88.35, 46.69, 255, 0.17);
  border-radius: 10px;
  border: none;

  color: #582fff;
  font-size: 14px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  word-wrap: break-word;
`;

function Enrollment() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModal(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setModal(false);
  };

  return (
    <EnrollmentContainer>
      <InfoContainer>
        <Category1>과학기술</Category1>
        <VerticalDivider />
        <Category2>강연/세미나</Category2>
        <ReportContainer
          onClick={() => openModal("행사신고가 완료되었습니다!")}
        >
          신고하기
        </ReportContainer>
        <EventTitle>
          제4회 홍익대학교 인공지능 캠프 <br /> [문과생 전용]
        </EventTitle>
        <EventTag>IT/프로그래밍</EventTag>
        <EventTag>과학기술</EventTag>
        <HorizontalDivider />
        <SponsorContainer>
          <Profile />
          <Sponsor>뉴럴웍스랩</Sponsor>
        </SponsorContainer>
        <Date>2024년 1월 13일</Date>
        <Price>무료</Price>
      </InfoContainer>

      <ButtonContainer>
        <ApplyButton
          onClick={() =>
            openModal(
              "해당 행사는 외부 사이트 링크가 없습니다. 주최자의 이메일로 신청부탁드립니다."
            )
          }
        >
          참가 신청하기
        </ApplyButton>
        <ConfirmButton>참가 확정하기</ConfirmButton>
        <ShareButton>공유</ShareButton>
        <BookmarkButton
          onClick={() => openModal("관심 행사에 등록되었습니다!")}
        >
          즐겨찾기
        </BookmarkButton>
      </ButtonContainer>

      {modal && (
        <PopUp onClose={closeModal}>
          <p>{modalContent}</p>
        </PopUp>
      )}
    </EnrollmentContainer>
  );
}

export default Enrollment;
