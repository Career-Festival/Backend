// FestivalHistory.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import imageIcon from "../../assets/images/frame_gallery_image.png";

const FestivalHistoryAll = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 5px;
  background-color: #ffffff;
  justify-content: space-between;
  position: relative; /* 부모 기준으로 자식의 위치 설정 */
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%; /* 가운데 정렬을 위해 50% 위치 설정 */
  width: 2px; /* 세로선의 너비 */
  background-color: #d8d8d8; /* 세로선의 색상 */
  content: ""; /* 가상 요소를 위한 필수 속성 */
`;

const HorizontalLine = styled.div`
  left: 0;
  right: 0;
  top: 50%;
  height: 1.5px;
  background-color: #d8d8d8;
  content: "";
`;

const Title = styled.div`
  color: #000000;
  font-size: 1.4vw;
`;

const Head = styled.div`
  display: flex;
  width: 100%;
  height: 10%
  flex: 1;
  border-radius: 5px;
  background-color: #e3dcff;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

const SectionContainer = styled.div`
  border-radius: 5px;
  width: 50%;
  color: #000000;
  font-size: 1.4vw;
  display: flex;
  flex-direction: column;
`;

const SectionInput = styled.div`
  display: flex;
  width: 100%;
  border-radius: 5px;
  flex-direction: column;
  background-color: #ffffff;
`;

const ContentContainer = styled.div`
  border-radius: 5px;
  width: 50%;
  color: #000000;
  font-size: 1.4vw;
  display: flex;
  flex-direction: column;
`;

const ContentInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #ffffff;
`;

const ContentAttachment = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 0.9vw;
  justify-content: space-between;
`;

const AttachmentButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  span {
    font-size: 0.6rem; /* 이미지첨부 글씨에 대한 스타일 조절 */
  }
`;

const SectionInputField = styled.input`
  width: 95%;
  height: 5.5vw; /* 원하는 크기로 조절 */
  padding: 5px;
  border: 0; /* 테두리 없애기 */
  outline: none; /* 포커스 효과 제거 */
`;
const ContentInputField = styled.input`
  width: 95%;
  height: 5vw; /* 원하는 크기로 조절 */
  padding: 5px;
  border: 0; /* 테두리 없애기 */
  outline: none; /* 포커스 효과 제거 */
`;

const ImageIcon = styled.img`
  width: 20%; /* 이미지의 크기를 조절하세요 */
  height: 100%;
  margin-left: 5px; /* 이미지와 글씨 사이의 간격을 조절하세요 */
`;

const CharacterCount = styled.div`
  color: #582fff;
  font-size: 0.8vw;
  align-self: flex-end;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 3px;
`;

const FestivalHistory = ({ onComplete }) => {
  const [section1, setSection1] = useState("");
  const [section2, setSection2] = useState("");
  const [section3, setSection3] = useState("");

  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");

  useEffect(() => {
    const isSection1Complete = section1 && content1;
    const isSection2Complete = (!section2 && !content2) || (section2 && content2);
    const isSection3Complete = (!section3 && !content3) || (section3 && content3);
  
    const isComplete = isSection1Complete && isSection2Complete && isSection3Complete;
  
    onComplete(isComplete);
  }, [section1, section2, section3, content1, content2, content3, onComplete]);

  const handleSectionChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const handleContentChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  return (
    <>
      <Title>
        <p>행사기록</p>
      </Title>
      <FestivalHistoryAll>
        <SectionContainer>
          <Head>섹션</Head>
          <HorizontalLine />
          <SectionInput>
            <SectionInputField
              type="text"
              id="section1"
              placeholder="다녀온 세션 이름을 적어주세요."
              value={section1}
              onChange={(e) => handleSectionChange(e, setSection1)}
            />
            <CharacterCount>{section1.length} /100자</CharacterCount>
          </SectionInput>
          <HorizontalLine />
          <SectionInput>
            <SectionInputField
              type="text"
              id="section2"
              placeholder="다녀온 세션 이름을 적어주세요."
              value={section2}
              onChange={(e) => handleSectionChange(e, setSection2)}
            />
            <CharacterCount>{section2.length} /100자</CharacterCount>
          </SectionInput>
          <HorizontalLine />
          <SectionInput>
            <SectionInputField
              type="text"
              id="section3"
              placeholder="다녀온 세션 이름을 적어주세요."
              value={section3}
              onChange={(e) => handleSectionChange(e, setSection3)}
            />
            <CharacterCount>{section3.length} /100자</CharacterCount>
          </SectionInput>
        </SectionContainer>
        <VerticalLine />
        <ContentContainer>
          <Head>내용</Head>
          <HorizontalLine />

          <ContentInput>
            <ContentInputField
              type="text"
              id="content1"
              placeholder="다녀온 세션 내용을 정리해주세요."
              value={content1}
              onChange={(e) => handleContentChange(e, setContent1)}
            />
            <ContentAttachment>
              <AttachmentButton>
                <span>이미지첨부</span>
                <ImageIcon src={imageIcon} alt="이미지 첨부 아이콘" />
              </AttachmentButton>
              <CharacterCount>{content1.length} /2000자</CharacterCount>
            </ContentAttachment>
          </ContentInput>

          <HorizontalLine />
          <ContentInput>
            <ContentInputField
              type="text"
              id="content2"
              placeholder="다녀온 세션 내용을 정리해주세요."
              value={content2}
              onChange={(e) => handleContentChange(e, setContent2)}
            />
            <ContentAttachment>
              <AttachmentButton>
                <ImageIcon src={imageIcon} alt="이미지 첨부 아이콘" />
                <span>이미지첨부</span>
              </AttachmentButton>
              <CharacterCount>{content2.length} /2000자</CharacterCount>
            </ContentAttachment>
          </ContentInput>

          <HorizontalLine />
          <ContentInput>
            <ContentInputField
              type="text"
              id="content3"
              placeholder="다녀온 세션 내용을 정리해주세요."
              value={content3}
              onChange={(e) => handleContentChange(e, setContent3)}
            />
            <ContentAttachment>
              <AttachmentButton>
                <ImageIcon src={imageIcon} alt="이미지 첨부 아이콘" />
                <span>이미지첨부</span>
              </AttachmentButton>
              <CharacterCount>{content3.length} /2000자</CharacterCount>
            </ContentAttachment>
          </ContentInput>
        </ContentContainer>
      </FestivalHistoryAll>
    </>
  );
};

export default FestivalHistory;
