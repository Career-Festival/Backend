// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import Recommend from "../components/home/Recommend";
import dummy from "../db/RecommendedEvents.json";
import styled from "styled-components";
import Header from "../components/header/Header";
import Banner from "../components/home/Banner";
import InterestArea from "../components/signup/InterestArea";
import { Link } from "react-router-dom";


//Home 전체 페이지
const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;


//모든 행사 보기
const HomePageShowAllLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: #838383;
  text-decoration-line: none;

  position: absolute;
  padding-top: 3rem;
  align-self: end;
  @media screen and (max-width: 600px) {
    font-size: 1.5vw;
  }
`;


/*개인 키워드 추천*/

//개인 키워드 추천 전체
const RecommendPersonalContainer = styled.div`
  //background-color: beige;
  display: flex;
  flex-direction: column;
  width: 70vw;

  h2{
    font-size: 1.5rem;
    font-weight: 900;
    margin: 2rem 0 0 0;

    @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
  }
`;

const PersonalContainerDiv = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
  margin: 1vw 0 1.5vw 0;
  

  @media screen and (max-width: 600px) {
    font-size: 2vw;
  }
`

//컴포넌트 자리
const RecommendPersonalWraper = styled.div`
  //background-color: lavender;

  width: 100%;

  // 그리드 3x2
  display: grid;
  grid-template-columns: repeat(3, 22vw);
  align-items: top;

  gap: 2vw;


  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;


/* 위치 근처 추천*/

//위치 근처 추천 전체
const RecommendPlaceContainer = styled.div`
  //background-color: #f2f2f2; /*임의로 영역 확인용*/

  display: flex;
  flex-direction: column;

  width: 70vw;
  margin-top: 5vw;
  margin-bottom: 5vw;

  h2{
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 3rem;
    justify-items: center;

    @media screen and (max-width: 600px) {
    font-size: 2vw;
  }
  }

`;


//컴포넌트 자리
const RecommendPlaceWraper = styled.div`
  //background-color: lavender;
  width: 100%;


   //그리드 3*1
  display: grid;
  grid-template-columns: repeat(3, 22vw);
  grid-template-rows: 1fr;
  align-items: top;
  gap: 2vw;

  @media screen and (max-width: 600px) {
    font-size: 1vw;}
`;



const HomePage = () => {
  const recommendedByPersonSlice = dummy.RecommendedByPerson.slice(0, 6); // 처음 6개 아이템만 사용
  const recommendedByPlaceSlice = dummy.RecommendedByPlace.slice(0, 3); // 처음 3개 아이템만 사용

  const [userName, setUserName] = useState(""); // 사용자 이름 상태
  
  //지역명
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");

  //지역
  // useEffect를 사용하여 컴포넌트가 처음 마운트될 때 실행될 로직 추가
  useEffect(() => {
    // 초기값으로 서울을 선택하도록 설정
    handleAreaSelect("seoul");
  }, []);

  // 모달 창을 열거나 닫는 함수를 정의합니다.
  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  // 모달 닫기 함수를 정의합니다.
  const closeModal = () => {
    setModalOpen(false);
  };

  // 시/도를 선택할 때 호출되는 함수입니다.
  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setSelectedCity("");
  };

  // 시/군/구를 선택할 때 호출되는 함수입니다.
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setModalOpen(false);
  };


  return (
    <div>
      <Header userName={userName} />
      <Banner />
      <HomePageContainer>
        <RecommendPersonalContainer>
          <h2>이런행사 찾으셨죠? </h2>
          <HomePageShowAllLink to ="/festival-list">모든행사보기</HomePageShowAllLink>
          <PersonalContainerDiv>
            회원가입 시 선택한
            <span style={{ color: "#582fff" }}> 커리어 키워드</span>에 가장
            부합한 행사들을 볼 수 있어요!
          </PersonalContainerDiv>

          <RecommendPersonalWraper>
            {recommendedByPersonSlice.map((item) => (
              <Recommend
                style={{
                  color: "white",
                  fontSize: "0.8rem",
                }}
                key={item.eventName} // 유일한 키가 필요합니다.
                mainImg={item.mainImg}
                eventName={item.eventName}
                recruitmentStart={item.recruitmentStart}
                recruitmentEnd={item.recruitmentEnd}
                isLiked={item.isLiked}
                price={item.price}
                profile={item.profile}
              />
            ))}
          </RecommendPersonalWraper>
        </RecommendPersonalContainer>

        <RecommendPlaceContainer>
          <h2>
            <span>
              {/* 지역명 */}
              <InterestArea
                style={{}}
                selectedArea={selectedArea}
                handleAreaSelect={handleAreaSelect}
                selectedCity={selectedCity}
                handleCitySelect={handleCitySelect}
                isModalOpen={isModalOpen}
                handleModalToggle={handleModalToggle}
                closeModal={closeModal}
                buttonText="지역명"
              />
            </span>
            근처 행사
          </h2>
          <HomePageShowAllLink to ="/festival-list">모든행사보기</HomePageShowAllLink>

          <RecommendPlaceWraper>
            {recommendedByPlaceSlice.map((item) => {
              return (
                <Recommend
                  mainImg={item.mainImg}
                  eventName={item.eventName}
                  recruitmentStart={item.recruitmentStart}
                  recruitmentEnd={item.recruitmentEnd}
                  isLiked={item.isLiked}
                  price={item.price}
                  profile={item.profile}
                />
              );
            })}
          </RecommendPlaceWraper>
        </RecommendPlaceContainer>
      </HomePageContainer>
    </div>
  );
};

export default HomePage;
