import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vw;
`;

const PageButton = styled.button`
  margin: 0 0.5vw;
  padding: 0.3vw 0.5vw;
  border: 1px solid #582fff;
  border-radius: 3px;
  background-color: ${(props) => (props.isActive ? "#582fff" : "transparent")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#582fff")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #582fff;
    color: #ffffff;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageClick = (page) => {
    // 페이지를 변경할 때 현재 페이지를 전달하여 누적되지 않게 합니다.
    onPageChange(page);
  };

  return (
    <PaginationWrapper>
      {pageButtons.map((page) => (
        <PageButton
          key={page}
          isActive={page === currentPage}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
