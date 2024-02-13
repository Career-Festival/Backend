import React, { useState } from "react";
import styled from "styled-components";

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5vw;
  cursor: pointer;
  color: ${(props) => (props.checked ? "#582fff;" : "black")};
  font-size: 0.9rem;
  @media screen and (max-width: 600px) {
    font-size: 1vw;
  }
`;

const StyledCheckbox = styled.input`
  margin-right: 0.5vw;
  width:1vw;
  height: 1vw;
`;

const CheckboxContainer = styled.div`
  form {
    margin-top: 1vw;
  }
`;

// const SelectedEvent = styled.div`
//   h5 {
//     color:  color: #582fff;;
//   }

//   ul {
//     list-style-type: none;
//     padding: 0;
//   }

//   li {
//     color:   color: #582fff;;
//   }
// `;

const Checkbox = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <CheckboxContainer>
      <form>
        {["강연/세미나", "학술대회", "전시/박람회", "기타"].map((option) => (
          <div key={option}>
            <CheckboxLabel checked={selectedOptions.includes(option)}>
              <StyledCheckbox
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </CheckboxLabel>
          </div>
        ))}
      </form>

      {/* 추후 출력은 안할거임 근데 데이터 읽어야되서 남겨둠
      {selectedOptions.length > 0 && (
        <SelectedEvent>
          <h5>선택된 이벤트 유형</h5>
          <ul>
            {selectedOptions.map((selected) => (
              <li key={selected}>{selected}</li>
            ))}
          </ul>
        </SelectedEvent>
      )} */}
    </CheckboxContainer>
  );
};

export default Checkbox;
