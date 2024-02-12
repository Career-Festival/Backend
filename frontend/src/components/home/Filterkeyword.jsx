import React from "react";
import styled from "styled-components";

//전체 틀
const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1vw;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;
// 선택된 키워드
const KeywordItem = styled.div`
  align-items: center;
  background-color: #582fff;
  color: #ffffff;
  font-size: 0.9rem; //선택된 필터 글씨 크기
  border-radius: 1vw;
  padding: 0.5vw;
  margin-top: 0.5vw;
  margin-right: 0.5vw;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;
// X 버튼
const RemoveButton = styled.button`
  background-color: #582fff;
  color: #ffffff;
  border: none;
  padding: 0.1vw;
  margin-left: 0.5vw;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;

const FilterKeyword = ({ selectedFilters, removeFilter }) => {
  return (
    <KeywordContainer>
      {selectedFilters.map((filter, index) => (
        <KeywordItem key={index}>
          <span>{filter}</span>
          <RemoveButton
            onClick={() => removeFilter(filter)}
          >
            X
          </RemoveButton>
        </KeywordItem>
      ))}
    </KeywordContainer>
  );
};

export default FilterKeyword;
