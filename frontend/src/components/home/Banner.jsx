// React 및 관련 라이브러리 import
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 배너 이미지 import
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner4 from "../../assets/images/banner4.png";
import buttonLeft from "../../assets/images/bannerleftarrow.png";
import buttonRight from "../../assets/images/bannerrightarrow.png";

// 상단-배너+인기검색어 스타일 정의
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f7ff;
`;

const BannerAndPopular = styled.div`
  display: flex;
  gap: 3vw;
  margin: 0 auto;
`;

const HomeP = styled.p`
  color: #000000;
  font-size: 1.3vw;
  font-weight: bold;
  padding: 0.5vw 0 0 17vw;
`;

const PickText = styled.span`
  color: #582fff;
  font-weight: bold;
`;
const TextP = styled.span`
  color: #000000;
  font-weight: bold;
`;

// 배너 스타일 정의
const BannerB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
 
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap:1vw;
  padding: 0 0 2vw 0;
  margin-left:-4vw;
`;

const Slides = styled.div`
  width: 100%;
  height: 100%;
`;


const Image = styled.img`
  width: 24.25vw;
  height: 13.27vw;
  //border-radius: 0.5vw;
`;

const Button = styled.img`
  width: 2.5vw;
  height: 2.5vw;
  cursor: pointer;
`;

const ButtonLeftStyled = styled(Button)``;

const ButtonRightStyled = styled(Button)``;

//인기검색어
const PopularsearchesTitle = styled.h3`
  font-size: 1.2vw;
  margin-top:-1.5vw;
`;

// Popularsearches 스타일 정의
const PopularsearchesStyled = styled.div`
  width: 10vw;
  max-height: 15vw; /* 최대 높이 지정 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  border-radius: 1vw;
  border: 1px solid #c3c3c3;
  padding: 1vw;
  margin-top: -3vw;
  margin-left: -2vw;
`;
const PopularsearchItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8vw;
  color: ${(props) => (props.rank <= 3 ? "#582fff" : "#000000")};
  font-size: 0.8vw;
`;

const ItemNumber = styled.span`
  font-weight: bold;
  margin-right: 1vw;
  padding: 0.2vw 0.5vw;
  border-radius: 30%;
  color: #ffffff;

  ${(props) => {
    const rank = parseInt(props.rank, 10);
    return rank <= 3
      ? `
        background-color: #582fff;
      `
      : `
        background-color: #d3d3d3;
      `;
  }}
`;

// 배너 컴포넌트 정의
const Banner = () => {
  // 배너 이미지 배열
  const images = [Banner1, Banner2, Banner3, Banner4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이드 변경 처리 함수
  const handleSlideChange = (direction) => {
    let newIndex = currentSlide + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentSlide(newIndex);
  };

  // 자동 슬라이드 타이머 설정
  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        let newIndex = prevSlide + 1;
        if (newIndex >= images.length) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 3000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [images.length]);
  //인기검색어
  const popularKeywords = [
    "경영 세미나",
    "취업",
    "학술대회",
    "대학 경연",
    "대학 세미나",
    "박람회",
  ];
  // 인기 검색어를 5개까지만 사용
  const limitedPopularKeywords = popularKeywords.slice(0, 5);

  return (
    <TopContainer>
      <HomeP>
        커리어 페스티벌 <PickText>pick</PickText>
        <TextP>!</TextP>
      </HomeP>
      <BannerAndPopular>
        <BannerB>
          <BannerContainer>
            <ButtonLeftStyled
              src={buttonLeft}
              onClick={() => handleSlideChange(-1)}
              alt="ButtonLeft"
            />
            {/* 첫 번째 이미지 */}
            <Slides>
              <Image src={images[currentSlide]} alt="Banner" />
            </Slides>
            {/* 두 번째 이미지 */}
            <Slides>
              <Image
                src={images[(currentSlide + 1) % images.length]}
                alt="Banner"
              />
            </Slides>
            <ButtonRightStyled
              src={buttonRight}
              onClick={() => handleSlideChange(1)}
              alt="ButtonRight"
            />
          </BannerContainer>
        </BannerB>
        <PopularsearchesStyled>
          <PopularsearchesTitle><h4>인기 검색어</h4></PopularsearchesTitle>
          {limitedPopularKeywords.map((keyword, index) => (
            <PopularsearchItem key={index} rank={index + 1}>
              <ItemNumber rank={index + 1}>{index + 1}</ItemNumber> {keyword}
            </PopularsearchItem>
          ))}
        </PopularsearchesStyled>
      </BannerAndPopular>
    </TopContainer>
  );
};

export default Banner;