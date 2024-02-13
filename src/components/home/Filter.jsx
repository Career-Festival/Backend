import React from "react";
import styled from "styled-components";
import checkedImage from "../../assets/images/checked_image.png";
import uncheckedImage from "../../assets/images/unchecked_image.png";

const CheckboxLabel = styled.label`
  display: flex;
 
  margin-bottom: 0.5vw;
  cursor: pointer;
  color: black;
  font-size: 1rem;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;

const StyledCheckbox = styled.input`
  display: none;
`;

const CheckImage = styled.img`
  width: 1vw;
  height: 1vw;
  margin-right: 0.7vw;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: white;
  transition: border-color 0.3s, background-color 0.3s;
`;

const Filter = ({ selectedFilters, setSelectedFilters, isSmall }) => {
  const handleCheckboxChange = (category) => {
    if (selectedFilters.includes(category)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== category)
      );
    } else {
      setSelectedFilters([...selectedFilters, category]);
    }
  };

  return (
    <form>
      {[
        "창업",
        "IT/프로그래밍",
        "경제/금융",
        "경영",
        "인문/사회",
        "예술",
        "마켓팅",
        "과학기술",
        "디자인/영상",
        "의료/의학",
        "기획",
        "관광/여행",
        "기타",
      ].map((category) => (
        <div key={category}>
          <CheckboxLabel isSmall={isSmall}>
            <StyledCheckbox
              type="checkbox"
              value={category}
              checked={selectedFilters.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
            <CheckImage
              src={
                selectedFilters.includes(category)
                  ? checkedImage
                  : uncheckedImage
              }
              alt={category}
              checked={selectedFilters.includes(category)}
            />
            {category}
          </CheckboxLabel>
        </div>
      ))}
    </form>
  );
};

export default Filter;
