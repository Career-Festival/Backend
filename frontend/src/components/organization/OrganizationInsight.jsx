import React from 'react'
import styled from 'styled-components'
import buttonright from '../../assets/images/bannerrightarrow.png'



// 주최자 인사이트 블록
const OrganizationInsightWrapper = styled.div`
    //border: 1px solid red;

    width: auto;
    border-radius: 12px;
    box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);

    display: block;
    margin: 1rem auto;
    padding: 2vw 1.5vw;

    h3{
        font-size: 1rem;
        font-weight: 700;
        margin-top: 0;

        @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
    }
`
const OrganizationInsightBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
`


//인사이트 작은 네모 박스 2개
const OrganizationInsightBox = styled.div`
    border: 0.8px solid #838383;
    width: 25%;
    border-radius: 10px;
    margin-right: 2vw;
    padding: 1.5vw 1.5vw;

    h2{
        font-size: 1.3em;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        align-items: center;
       
        margin: 0;

        @media screen and (max-width: 600px) {
        font-size: 1.5vw;
        }


    }


    img{
        width: 0.7rem;
        margin-left: 0.5rem;
    

        @media screen and (max-width: 600px) {
        width: 1.1vw;
        margin-left: 0.5vw;
        }
    }

    div{
       margin-top: 3.5vw;
       @media screen and (max-width: 600px) {
        font-size: 2vw;
        }
    }

`
const showButtonWrapper = styled.span`
    
`


function OrganizationInsight(props) {
  return (
    <OrganizationInsightWrapper>
        <h3>프로필 인사이트</h3>
        <OrganizationInsightBoxWrapper>
            <OrganizationInsightBox>
                <h2>구독자<showButtonWrapper><img src={buttonright} alt='구독자 목록 보기'/></showButtonWrapper></h2> {/* 버튼 아이콘 바꾸기 */}
                <div><span style={{fontSize: "2.2em", fontWeight: '350', color:"#582FFF"}}>{props.subscriberNumber}</span>
                <span style={{fontSize: "1em", fontWeight: '400', color:"black"}}>명</span>
                </div>
            </OrganizationInsightBox>
                
            <OrganizationInsightBox>
                <h2>등록행사</h2> 
                <div><span style={{fontSize: "2.2em", fontWeight: '350', color:"#582FFF"}}>{props.uploadedNumber}</span>
                <span style={{fontSize: "1em", fontWeight: '400', color:"black"}}>개의 행사</span>
                </div>
            </OrganizationInsightBox>    
        </OrganizationInsightBoxWrapper>
    </OrganizationInsightWrapper>
  )
}

export default OrganizationInsight