// 필요한 React 및 스타일링 컴포넌트를 불러옵니다.
import React, { useState, useEffect } from "react";
import InterestArea from "./InterestArea";
import {
  Container,
  Title,
  Subtitle,
  Subtitle2,
  Gender,
  Age,
  EmailInput,
  TelInput,
  AffiliationInput,
  KeyworldOptionList,
  KeywordButton,
  TwoButton,
  LaterSave,
  Save,
} from "./ParticipantStyle";

// Participant 컴포넌트를 정의합니다.
const Participant = () => {
  // 모달 창의 열림 여부와 선택된 지역 정보 및 추가 정보를 상태로 관리합니다.
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("seoul");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState(""); // 추가: 이메일 상태
  const [phoneNumber, setPhoneNumber] = useState(""); // 추가: 전화번호 상태
  const [affiliation, setAffiliation] = useState(""); // 추가: 소속 상태
  const [selectedKeywords, setSelectedKeywords] = useState([]); // 추가: 선택된 키워드 상태
  // 기타 키워드 입력을 위한 상태 추가
  const [customKeyword, setCustomKeyword] = useState("");
  const [customKeywords, setCustomKeywords] = useState([]);

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

  // 커리어 키워드 선택 시 호출되는 함수입니다.
  const handleKeywordSelect = (keyword) => {
    // 이미 선택된 키워드인지 확인 후 토글
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords((prevKeywords) =>
        prevKeywords.filter((kw) => kw !== keyword)
      );
    } else {
      setSelectedKeywords((prevKeywords) => [...prevKeywords, keyword]);
    }
  };

// 기타 키워드를 추가하는 함수
const addCustomKeyword = () => {
  if (customKeyword.trim() !== "") {
    setSelectedKeywords((prevKeywords) => [...prevKeywords, customKeyword]);
    setCustomKeywords((prevCustomKeywords) => [
      ...prevCustomKeywords,
      customKeyword
    ]);
    setCustomKeyword(""); // 입력 필드 초기화
  }
};

// 기타 키워드를 삭제하는 함수
const removeCustomKeyword = (keywordToRemove) => {
  setSelectedKeywords((prevKeywords) =>
    prevKeywords.filter((kw) => kw !== keywordToRemove)
  );
  setCustomKeywords((prevCustomKeywords) =>
    prevCustomKeywords.filter((kw) => kw !== keywordToRemove)
  );
};
  // "다음에입력" 버튼을 눌렀을 때 실행되는 함수
const handleNextInput = () => {
  const confirmNextInput = window.confirm("정말 다음에 입력하세요?");
  if (confirmNextInput) {
    // 여기서 홈화면으로 이동하도록 설정
    window.location.href = "/"; // 홈화면의 경로에 따라 수정하세요.
  }
  // 다음에 입력하지 않을 경우, 아무 동작도 하지 않음
};
  // 부가정보를 저장하는 함수입니다.
  const saveAdditionalInfo = () => {
    // 모든 항목이 입력되었는지 확인
    if (
      selectedArea &&
      selectedCity &&
      email &&
      phoneNumber &&
      affiliation &&
      selectedKeywords.length > 0
    ) {
      // 데이터를 백엔드로 전달하는 로직 추가
      console.log("부가정보 저장:", {
        selectedArea,
        selectedCity,
        email,
        phoneNumber,
        affiliation,
        selectedKeywords
      });
      // 추가로 필요한 로직 수행
    } else {
      // 모든 항목이 완료되지 않았을 때 처리
      console.error("모든 항목을 완료해야 합니다.");
    }
  };

  // Participant 컴포넌트의 렌더링 부분입니다.
  return (
    <Container>
      <Title>김커리님, Career Festival에 가입해주셔서 감사합니다.</Title>
      <Subtitle>나에게 맞는 오프라인 커리어 행사를 찾고 싶으신가요?</Subtitle>

      <Subtitle2>
        부가정보를 미리 입력하면 더 빠르게 행사 매칭이 가능합니다.
        <br />
        또, 행사에 함께 갈 팀원 모집 시 서로의 프로필 열람이 가능합니다.
      </Subtitle2>
      <hr />

      {/* 성별과 나이 입력 부분입니다. */}
      <p>성별</p>
      <Gender>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">남성</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">여성</label>
      </Gender>

      <Age>
        <label>나이</label>
        <input type="number" placeholder="나이를 입력하세요" />
      </Age>

      {/* 관심지역 입력 부분입니다. */}
      <p>관심지역</p>
      <InterestArea
        selectedArea={selectedArea}
        handleAreaSelect={handleAreaSelect}
        selectedCity={selectedCity}
        handleCitySelect={handleCitySelect}
        isModalOpen={isModalOpen}
        handleModalToggle={handleModalToggle}
        closeModal={closeModal}
        buttonText="선택하기"
      />

      {/* 이메일 입력 부분입니다. */}
      <EmailInput>
        <label>이메일</label>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </EmailInput>

      {/* 전화번호 입력 부분입니다. */}
      <TelInput>
        <label>전화번호</label>
        <input
          type="tel"
          placeholder="전화번호를 입력하세요"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </TelInput>

      {/* 소속 입력 부분입니다. */}
      <AffiliationInput>
        <p>소속(회사/기관/학교명)</p>
        <input
          type="text"
          placeholder="소속을 입력하세요"
          value={affiliation}
          onChange={(e) => setAffiliation(e.target.value)}
        />
      </AffiliationInput>

      {/* 추가: 커리어 키워드 입력 부분입니다. */}
      <p>커리어 키워드</p>
      <KeyworldOptionList>
        {[
          "창업",
          "라이프",
          "예술",
          "IT/프로그래밍",
          "마케팅",
          "경제/금융",
          "인문/사회",
          "과학기술",
          "디자인",
          "관광/여행"
        ].map((keyword) => (
          <KeywordButton
            key={keyword}
            onClick={() => handleKeywordSelect(keyword)}
            selected={selectedKeywords.includes(keyword)}
          >
            {keyword}
          </KeywordButton>
        ))}

        {/* 기타 키워드 입력 필드 */}
        <input
          type="text"
          placeholder="기타 키워드 추가"
          value={customKeyword}
          onChange={(e) => setCustomKeyword(e.target.value)}
        />

        {/* 기타 키워드 추가 버튼 */}
        <button onClick={addCustomKeyword}>추가</button>

        {/* 기타 키워드 목록 */}
        {customKeywords.map((customKeyword) => (
          <KeywordButton
            key={customKeyword}
            onClick={() => handleKeywordSelect(customKeyword)}
            selected={selectedKeywords.includes(customKeyword)}
            onRemove={() => removeCustomKeyword(customKeyword)}
          >
            {customKeyword}
          </KeywordButton>
        ))}
      </KeyworldOptionList>
      <hr />
      <TwoButton>
        <LaterSave onClick={handleNextInput}>다음에 입력</LaterSave>
        {/* 부가정보 저장하기 버튼 */}
        <Save
          onClick={saveAdditionalInfo}
          disabled={
            !selectedArea ||
            !selectedCity ||
            !email ||
            !phoneNumber ||
            !affiliation ||
            selectedKeywords.length === 0
          }
        >
          부가정보 저장하기
        </Save>
      </TwoButton>
    </Container>
  );
};

// Participant 컴포넌트를 내보냅니다.
export default Participant;
