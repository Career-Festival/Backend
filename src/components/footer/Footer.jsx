// src/components/footer/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  font-size: 0.8rem;
  //font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;

//공지사항 
const NoticeContainer = styled.div`
  background: #ffffff;
  border-top: solid 1px #d9d9d9;
  border-bottom: solid 1px #d9d9d9;
  color: #838383;

  padding-left: 10vw;
  height: 3vw;
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;

//하단 전체
const FooterInfoContainer = styled.div`
  background: #fbfafa;
  padding-left: 10vw;


  display: flex;
  flex-direction: column;
  justify-items: center;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;

//회사소개...., 서비스 이용약관.. 라인 (추후 링크 걸 수 있는 라인)
const FooterInfoBtnContainer = styled.li`
  display: flex;
  list-style: none;
  margin: 1vw 0;

  li {
    margin-right: 2vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;


const FooterContactContainer = styled.footer`
  color: #838383;
  margin-bottom: 1vw;
  line-height: 1.5;

  a {
    color: inherit;
    text-decoration: none;
  }

  span {
    margin-right: 0.5vw;
  }

  button {
    margin-top: 1vw;
    margin-right: 1vw;
    margin-bottom: 1vw;
    padding: 0.5vw 0.7vw;

    color: #582fff;
    //font-size: 0.7rem;
    font-weight: bold;

    border: none;
    background: #dad1fb;
    border-radius: 0.3vw;
  }

  @media screen and (max-width: 600px) {
    button {
      margin-top: 1vw;
      margin-right: 1vw;
      margin-bottom: 1vw;
      padding: 0.5vw 1vw;
      font-size: 1vw;
    }
  }
`;

const FooterCompanyInfoContainer = styled.div`
  margin-right: 30vw;
  line-height: 1.5;

  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NoticeContainer>
        <span>공지사항</span><span style={{marginLeft: "2vw"}}>유료 행사 참가자 신청 프로세스 변경 안내</span>
      </NoticeContainer>
      <FooterInfoContainer>
        <FooterInfoBtnContainer>
          <li>회사소개</li>
          <li>서비스 소개</li>
          <li>공지사항</li>
          <li>자주 묻는 질문</li>
          <li>채용</li>
        </FooterInfoBtnContainer>
        <FooterContactContainer>
          <div>
            <span>서비스 이용 문의 </span>
            <span>채팅상담 (평일 10:00 ~ 17:00)</span>
          </div>
          <div>
            <span>사업 제휴 문의</span>
            <a  style={{marginLeft: "0.5vw"}} //채팅상담과 수직 맞추기 
             href = 'mailto:partnership@careerfestival.co.kr'>partnership@careerfestival.co.kr</a>
          </div>
          <div>
            <button>광고센터</button>
            <button>서비스 소개자료</button>
          </div>
        </FooterContactContainer>
        <FooterCompanyInfoContainer>
          <div style={{fontSize:"1vw", marginBottom: "0.5vw"}}>커리어 페스티벌</div>
          <div>(주)커리어페스티벌 사업자등록번호 13-87594</div>
          <div>통신판매업 신고번호 제2023-서울마포-1346호</div>
          <div><span>대표 이지영</span><span>  |  개인정보책임자 이지영</span></div>
          <div>서울특별시 마포구 마포대로 122</div>
          <div style={{color: "#582fff"}}>커리어 페스티벌은 통신판매중개자이며 행사에 대한 당사자 및 주최자가 아닙니다. 
            따라서 등록된 행사에 대해 책임지지 않습니다.</div>
          <br></br>
          
          <FooterInfoBtnContainer>
            <li>서비스 이용 약관</li>
            <li>개인정보처리방침</li>
            <li>전자금융거래 이용약관</li>
            <li>취소 및 환불 약관</li>
            <li>이메일 주소 무단수집 거부</li>
          </FooterInfoBtnContainer>
          <br></br>
          <div style={{fontSize:"0.7vw", color: "#838383", marginBottom: "1vw"}}>Copyright CareerFestival Co.   All Rights Reserved</div>
        </FooterCompanyInfoContainer>
      </FooterInfoContainer>
    </FooterContainer>
  );
};

export default Footer;
