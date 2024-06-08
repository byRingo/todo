import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid black;
  padding: 1rem;
`;

export const Li = styled.li<{ $isCompleted: boolean }>`
  list-style: none;
  text-align: center;
  font-size: 24px;
  text-decoration: ${(props) => (props.$isCompleted ? "line-through" : "none")};
  width: 7rem;
  // color: ${(props) => (props.$isCompleted ? "green" : "black")};
`;

export const CompleteButton = styled.button`
  background-color: gainsboro;
  border: none;
  cursor: pointer;
`;
