import styled from "styled-components";

export const Item = styled.form`
  display: flex;
  gap: 1rem;
  background-color: #f5f2ff;
  padding: 1rem;
  border-radius: 1rem;
`;

export const Li = styled.li<{ $isCompleted: boolean }>`
  list-style: none;
  font-size: 30px;
  text-decoration: ${(props) => (props.$isCompleted ? "line-through" : "none")};
  width: 100%;
  color: ${(props) => (props.$isCompleted ? "#C9C7ED" : "#675ea9")};
  &:focus {
    border: 2px solid #f5f2ff;
  }
`;

export const CompleteButton = styled.button<{ $isCompleted: boolean }>`
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #675ea9;
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.$isCompleted ? "#7a89f3" : "white")};
  margin-top: 1px;
`;

export const Checkmark = styled.div`
  -ms-transform: scaleX(-1) rotate(-35deg); /* IE 9 */
  transform: scaleX(-1) rotate(-35deg);
  color: white;
  margin-right: 1px;
`;

export const DeleteButton = styled.button`
  background-color: #f5f2ff;
  color: #7a89f3;
  border: none;
  cursor: pointer;
`;

export const DeleteImg = styled.img`
  width: 30px;
`;
