import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../assets/images/diary_down_arrow.png";

const DropdownContainer = styled.div`
  display: inline-block;

  color: #4e4e4e;
  font-family: "Noto Sans KR";
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SelectedText = styled.div`
  display: inline-block;
  margin: 0 0.5vw 0 0.5vw;
  position: relative;

  color: black;
  font-family: "Noto Sans KR";
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Button = styled.img`
  width: 1.5vw;
  height: 1vw;
  cursor: pointer;
`;

const DropDownButton = styled(Button)``;

const MenuContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: white;
  border-radius: 0.625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  left: 35vw; // 추후에 맞춰야됨
`;

const MenuItem = styled.div`
  color: ${(props) => (props.isSelected ? "red" : "#838383")}; //색깔 임시지정
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  padding: 10px;
  cursor: pointer;
  line-height: normal;
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("강연/세미나");
  const navigate = useNavigate(); // React Router의 useNavigate 훅 사용

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);

    // 선택한 메뉴에 따라 경로 이동
    switch (menu) {
      case "강연/세미나":
        navigate("/diary/lectureseminar");
        break;
      case "학술대회":
        navigate("/diary/symposium");
        break;
      case "전시/박람회":
        navigate("/diary/exhibitionfair");
        break;
      case "기타":
        navigate("/diary/other");
        break;
      default:
        break;
    }
  };

  return (
    <DropdownContainer>
      오늘의
      <SelectedText> {selectedMenu}</SelectedText>
      <DropDownButton src={ArrowIcon} onClick={toggleMenu} />
      <MenuContainer isOpen={isOpen}>
        <MenuItem
          isSelected={selectedMenu === "강연/세미나"}
          onClick={() => handleMenuClick("강연/세미나")}
        >
          강연/세미나
        </MenuItem>

        <MenuItem
          isSelected={selectedMenu === "학술대회"}
          onClick={() => handleMenuClick("학술대회")}
        >
          학술대회
        </MenuItem>

        <MenuItem
          isSelected={selectedMenu === "전시/박람회"}
          onClick={() => handleMenuClick("전시/박람회")}
        >
          전시/박람회
        </MenuItem>

        <MenuItem
          isSelected={selectedMenu === "기타"}
          onClick={() => handleMenuClick("기타")}
        >
          기타
        </MenuItem>
      </MenuContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
