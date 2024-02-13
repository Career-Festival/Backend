import React from 'react';
import styled from "styled-components";
import MypageProfileImg from '../../assets/images/mypage_profile.png';

//전체 페이지
const MypageProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  align-items: center;
  //justify-content: center;
  padding: 5vw 0vw 7vw 7vw;
`
const MypageProfileImgWrapper = styled.div`
  //border: 1px solid red;
  width: 18vw;
  height: 18vw;

  img{
    width: 100%;
    height: 100%;
  }
`
const MypageInfoWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;

  h2{
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 0 2.5vw 0;
  }
  span{
    color: #582FFF;
  }
`
const EmailWrapper = styled.div`
  h4{
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0;
  }
  div{
    font-size: 0.8rem;
    font-weight: 420;
    margin: 0.7vw 0 2vw 0;
  }
`
const PersonalAreaWrapper = styled.div`
h4{
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0;
  }
  
`
const AreaItem = styled.button`
  margin: 0.7vw 0 2vw 0;
  border: none;
  border-radius: 6px;
  width: 4vw;
  height: 2vw;
  background-color: #DAD1FB;
  color: #582FFF;
  font-size: 1rem;
  font-weight: 700;
`
const Introduce = styled.div`
h4{
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0;
  }
  div{
    font-size: 0.8rem;
    font-weight: 420;
    margin: 0.7vw 0 0 0;
  }
  
`
const ShowProfile = styled.div`
  position: absolute;
  margin-top: 25vw;
  margin-left: 46vw;
  font-size: 0.8rem;
  font-weight: 410;
  color: #582FFF;
`


function MypageProfile() {
  return (
    <MypageProfileContainer>
      <MypageProfileImgWrapper>
        <img src={MypageProfileImg} alt='mypageProfile'/>
      </MypageProfileImgWrapper>
      <MypageInfoWrapper>
        <h2>안녕하세요 <span>김커리</span>입니다.</h2> {/* 데이터 연결 필요 */}
        <EmailWrapper>
          <h4>이메일</h4>
          <div>dkfjaljdlkfjslkf</div>
        </EmailWrapper>

        <PersonalAreaWrapper>
          <h4>관심지역</h4>
          <AreaItem>용산구</AreaItem>
        </PersonalAreaWrapper>

        <Introduce>
          <h4>한줄 소개</h4>
          <div>행사를 사랑하고 나누는 삶!</div>
        </Introduce>
      </MypageInfoWrapper>
      <ShowProfile>보여지는 프로필 설정하기</ShowProfile>

    </MypageProfileContainer>

  )
}

export default MypageProfile