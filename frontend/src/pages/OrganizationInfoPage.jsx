import React from 'react'
import styled from 'styled-components'
import  "../db/organizationsData.json"
import { Link, useLocation, useParams } from 'react-router-dom'
import OrganizationInsight from '../components/organization/OrganizationInsight'
import dummy from "../db/RecommendedEvents.json"
import Recommend from '../components/home/Recommend'
import Backicon from '../assets/images/keyboard-left-arrow-button.png'


//전체 페이지
const OrganizationInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3vw 15vw;
    gap: 3vw
`

//이전 페이지 이동
const OrganizationPageReturnContainer = styled.div`
    //background-color: beige;

    img{
        width: 2vw;
    }
`

//주최자 상단 
const OrganizationInsightContainer = styled.div`
    //background-color: beige;
    width: 100%;

`

// 프로필 이미지, 이름, 구독 버튼 (수정 버튼)
const OrganizationProfileWrapper = styled.div`
    //background-color: aliceblue;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

`

const OrganizationProfileImg = styled.img`
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
`

const OrganizationNameWrapper = styled.div`
    margin-left: 1vw;
    font-size: 1.5rem;
    font-weight: 700;

    @media screen and (max-width: 600px) {
    font-size: 3vw;
  }
`

const OrganizationButton = styled.button`
    position: absolute;
    right: 0;

    width: 9vw;
    height: 3vw;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: #582FFF;
    color: #ffff;

    @media screen and (max-width: 600px) {
    font-size: 1.5vw;
  }
`

//행사 리스트
const OrganizationFestivalListContainer = styled.div`
    //background-color: beige;
    width: 100%;
    gap: 1vw;

    h4{
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;

        @media screen and (max-width: 600px) {
        font-size: 2.4vw;
        }

    }

    h2{
        font-size: 1rem;
        font-weight: 400;
        margin: 0.5vw 0 1.5vw 0;

        @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
    }
`
const OrganizationFestivalListWrapper = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: repeat(3, 22vw);
  gap: 2vw;
  font-size: 0.9rem;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`

const BackLink = styled(Link)`
    
`



function OrganizationInfoPage() {
  const {OrganizationName} = useParams();
  const {state} = useLocation();
  console.log(OrganizationName);
  console.log(state);

  


  return (
    <OrganizationInfoContainer>
        <OrganizationPageReturnContainer>
            <BackLink to="/festival-list"> {/* 메인 화면으로 이동하는 BackLink 컴포넌트 추가 */}
                 <img src={Backicon} alt="Backicon" />
            </BackLink>
        </OrganizationPageReturnContainer>


        <OrganizationInsightContainer>
            <OrganizationProfileWrapper>
                <OrganizationProfileImg src={state.profile} alt='주최자 프로필 사진'/>
                <OrganizationNameWrapper>{state.OrganizationName}</OrganizationNameWrapper>
                {/* 주최자로 로그인시 행사 등록하기 */}
                <OrganizationButton>구독하기</OrganizationButton>
            </OrganizationProfileWrapper>
            
            <OrganizationInsight
                subscriberNumber = {state.subscriberNumber}
                uploadedNumber = {state.uploadedNumber}
            />

        </OrganizationInsightContainer>

        <OrganizationFestivalListContainer>
            <h4>행사목록</h4>
            <h2>그동안 등록했던 행사들을 볼 수 있습니다.</h2>
            <OrganizationFestivalListWrapper>
                {dummy.RecommendedByPerson.slice(0, 3).map((item) => (
                <Recommend
                key={item.eventName}
                mainImg={item.mainImg}
                eventName={item.eventName}
                recruitmentStart={item.recruitmentStart}
                recruitmentEnd={item.recruitmentEnd}
                isLiked={item.isLiked}
                price={item.price}
                profile={item.profile}
              />
            ))}
            </OrganizationFestivalListWrapper>
        </OrganizationFestivalListContainer>
    </OrganizationInfoContainer>
  )
}

export default OrganizationInfoPage