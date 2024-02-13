import React from "react";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Banner from "../components/home/Banner";
import Filter from "../components/home/Filter";
import Checkbox from "../components/home/Checkbox";
import InterestArea from "../components/signup/InterestArea";
import FilterKeyword from "../components/home/Filterkeyword";
import Recommend from "../components/home/Recommend";
import dummy from "../db/RecommendedEvents.json";
import { Link } from "react-router-dom";


//페이징
import Pagination from "../components/home/Pagination";

//주최자
import organizationsData from "../db/organizationsData.json"
import OrganizationList from "../components/home/OrganizationList";
import buttonLeft from "../assets/images/bannerleftarrow.png";
import buttonRight from "../assets/images/bannerrightarrow.png";

// 중간 컨테이너에 대한 스타일링
const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vw;
  padding: 4vw 0 2vw 0;
`;
// 필터 및 지역 컴포넌트를 담는 컨테이너에 대한 스타일링
const FilterAndAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

//필터
const FilterContainer = styled.div`
  width: 100%;
  color: #582fff;
  font-size: 1.2rem;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;
// 필터 초기화 버튼에 스타일을 적용한 컴포넌트
const StyledResetButton = styled.button`
  width: 100%;
  background-color: transparent;
  color: #838383;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 4vw;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
  &:hover {
    text-decoration: underline;
  }
`;
// 필터 단락에 대한 스타일링
const FilterP = styled.p`
  font-weight: bold;
  color: #000000;
`;

//지역
const AreaContainer = styled.div`
  //width: 100%;
  //color: #000000;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;
const Area = styled.div`
  width: 100%;
  margin-top: 1vw;
`;

//행사유형
const Eventtype = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #000000;
  margin-top: -1vw;
  font-size: 1rem;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;

// 행사 목록 컨테이너에 대한 스타일링
const Eventlist = styled.div`
  // width: 50vw;
  // height: 85vw;
`;

// 페스티벌 리스트 래퍼에 대한 스타일링
const FestivalListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 15vw);
  gap: 2vw;
  font-size: 0.9rem;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;
//키워드
const KeywordContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 1.8vw;
  }
`;

// 하단-주최자
const LowerContaniner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f9f7ff;
  padding: 1vw 0 4vw 0;
`;


//주최자
const OrganizationListContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
  }

  span {
    color: #582fff;
  }
`;

const OrganizationslistWraper = styled.div`
  //width: 100%;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const OrganizationListBoxWrapper = styled.div`
  // 그리드
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3vw;
`;



const FestivalListPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  //지역
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);

  // 행사 유형을 선택할 때 호출되는 함수입니다.
  const handleEventTypeSelect = (eventType) => {
    if (selectedEventTypes.includes(eventType)) {
      setSelectedEventTypes(
        selectedEventTypes.filter((type) => type !== eventType)
      );
    } else {
      setSelectedEventTypes([...selectedEventTypes, eventType]);
    }
  };
  // 선택된 필터를 제거하는 함수
  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  // 필터 초기화 함수
  const resetFilters = () => {
    setSelectedFilters([]);
    setSelectedArea("seoul");
    setSelectedCity("");
    setSelectedEventTypes([]);
  };

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


  
  // 페이징 관련 state
  const itemsPerPage = 9; // 페이지당 보여줄 항목 수
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지에 해당하는 데이터를 반환하는 함수
  const getCurrentPageData = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const recommendedByPerson = dummy.RecommendedByPerson || [];
    return recommendedByPerson.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage]);

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  //주최자
  const organizationsListSlice = organizationsData.OrganizationsList.slice(
    0,
    4
  ); // 처음 4개 아이템 우선 보임

  const Button = styled.img`
    width: 2vw;
    height: 2.5vw;
    margin: 2vw;
    cursor: pointer;
  `;

  const ButtonLeftStyled = styled(Button)``;
  const ButtonRightStyled = styled(Button)``;

  return (
    <div>
      {/* 상단 영역 */}
      <Banner />

      {/* 중간 영역 */}
      <MiddleContainer>
        {/* 필터, 지역, 행사유형 영역 */}
        <FilterAndAreaContainer>
          <FilterContainer>
            필터
            {/* 필터 초기화 버튼 */}
            <StyledResetButton onClick={resetFilters}>
              필터 초기화 ⟳
            </StyledResetButton>
            <FilterP>행사분야</FilterP>
            <Filter
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </FilterContainer>
          <AreaContainer>
            지역
            <Area>
              <InterestArea
                style={{}}
                selectedArea={selectedArea}
                handleAreaSelect={handleAreaSelect}
                selectedCity={selectedCity}
                handleCitySelect={handleCitySelect}
                isModalOpen={isModalOpen}
                handleModalToggle={handleModalToggle}
                closeModal={closeModal}
                buttonText="전체"
              />
            </Area>
          </AreaContainer>
          <Eventtype>
            행사유형
            <Checkbox
              selectedOptions={selectedEventTypes}
              handleOptionSelect={handleEventTypeSelect}
            />
          </Eventtype>
        </FilterAndAreaContainer>

        {/* 행사목록 영역 */}
        <Eventlist>
          <KeywordContainer> 000 개의 행사를 찾았어요!</KeywordContainer>
          <FilterKeyword
            selectedFilters={selectedFilters}
            removeFilter={removeFilter}
          />

          <FestivalListWrapper>
            {getCurrentPageData().map((item) => (
              <Recommend
                key={item.eventName}
                mainImg={item.mainImg}
                eventName={item.eventName}
                recruitmentStart={item.recruitmentStart}
                recruitmentEnd={item.recruitmentEnd}
                isLiked={item.isLiked}
                price={item.price}
                profile={item.profile}
                //eventId={item.id} // 이벤트 ID 전달
              />
            ))}
          </FestivalListWrapper>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              dummy.RecommendedByPerson.length / itemsPerPage
            )}
            onPageChange={handlePageChange}
          />
        </Eventlist>
      </MiddleContainer>
      <LowerContaniner>
        {/*주최자*/}
        <OrganizationListContainer>
          <h2>
            <span>219</span>명의 주최자
          </h2>{" "}
          {/* 숫자는 나중에 데이터로 받아와야함 */}
          <OrganizationslistWraper>
            <ButtonLeftStyled src={buttonLeft} alt="ButtonLeft" />

            <OrganizationListBoxWrapper>
              {organizationsListSlice.map((item) => {
                return (
                  <OrganizationList
                    profile={item.profile}
                    OrganizationName={item.OrganizationName}
                    uploadedNumber={item.uploadedNumber}
                    subscribed={item.subscribed}
                    subscriberNumber={item.subscriberNumber}
                  />
                );
              })}
            </OrganizationListBoxWrapper>

            <ButtonRightStyled src={buttonRight} alt="ButtonRight" />
          </OrganizationslistWraper>
        </OrganizationListContainer>
      </LowerContaniner>
    </div>
  );
};

export default FestivalListPage;
