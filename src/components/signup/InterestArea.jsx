// InterestArea.jsx

import React, { useEffect } from "react";
// 데이터 파일 불러오기
import areaData from "../../db/areaData.json";
import {
  InterestAreaStyle,
  ModalContent,
  SelectWrapper,
  Modal,
  AreaWrapper,
  CityWrapper,
  AreaOptionList,
  CityOptionList,
  HorizontalLine,
  VerticalLine
} from "./InterestAreaStyle";



const InterestArea = ({
  selectedArea,
  handleAreaSelect,
  selectedCity,
  handleCitySelect,
  isModalOpen,
  handleModalToggle,
  closeModal,
  buttonText,
}) => {
  // 지역 정보를 데이터 파일에서 불러오기
  const areaOptions = areaData.areas;
  
  // 모달 외부 클릭 이벤트 핸들러
  const handleOutsideClick = (e) => {
    // 모달이 열려있는 상태에서 모달 영역 외부를 클릭한 경우에만 모달을 닫음
    if (isModalOpen && e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  

  // 컴포넌트가 마운트될 때 서울로 초기 선택
  useEffect(() => {
    handleAreaSelect("서울");
  }, []); 

  // 모달이 열릴 때 서울로 선택
  useEffect(() => {
    if (isModalOpen) {
      handleAreaSelect("서울");
    }
  }, [isModalOpen]);

  // 클릭 이벤트 리스너 등록
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, closeModal]);

  return (
    <InterestAreaStyle isOpen={isModalOpen}>
      {/* 모달 열기 버튼 */}
      <button onClick={handleModalToggle}>
        {/* 선택된 지역이 있으면 해당 지역, 없으면 기본 안내 메시지 출력 */}
        {selectedCity
          ? selectedCity
          : selectedArea
          ? `${buttonText} ${isModalOpen ? "▲" : "▼"}`
          : `관심 ${buttonText} 선택하세요`}
      </button>

      {/* 모달 창 */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} className="modal-overlay">
          {/* X 버튼 추가 */}
          {/* <button onClick={closeModal} style={{ float: "right", cursor: "pointer" }}>
            X
          </button> */}
          <ModalContent>
            <SelectWrapper>
              {/* 시/도 선택 부분 */}
              <AreaWrapper>
                <label>시/도</label>
                <HorizontalLine></HorizontalLine>
                <AreaOptionList>
                  {Object.keys(areaOptions).map((area) => (
                    <button
                      key={area}
                      onClick={() => handleAreaSelect(area)}
                      className={selectedArea === area ? "selected" : ""}
                    >
                      {area}
                    </button>
                  ))}
                </AreaOptionList>
              </AreaWrapper>

              {/* 세로선 */}
              <VerticalLine />
              {/* 시/군/구 선택 부분 */}
              {selectedArea !== "" && areaOptions[selectedArea] && (
                <CityWrapper>
                  <label>시/군/구</label>
                  <HorizontalLine></HorizontalLine>
                  <CityOptionList>
                    {areaOptions[selectedArea].map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCitySelect(city)}
                        className={selectedCity === city ? "selected" : ""}
                      >
                        {city}
                      </button>
                    ))}
                  </CityOptionList>
                </CityWrapper>
              )}
            </SelectWrapper>
          </ModalContent>
        </Modal>
      )}
    </InterestAreaStyle>
  );
};

export default InterestArea;