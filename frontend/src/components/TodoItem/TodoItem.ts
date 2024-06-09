import styled from "styled-components";

export const Item = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const Li = styled.li<{ $isCompleted: boolean }>`
  list-style: none;
  text-align: center;
  font-size: 20px;
  text-decoration: ${(props) => (props.$isCompleted ? "line-through" : "none")};
  width: 100%;
  color: ${(props) => (props.$isCompleted ? "#C9C7ED" : "#7a89f3")};
  @media (min-width: 800px) and (max-width: 1200) {
    font-size: 30px;
  }
`;

export const CompleteButton = styled.button<{ $isCompleted: boolean }>`
  cursor: pointer;
  border: 1px solid gray;
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.$isCompleted ? "#7a89f3" : "white")};
`;

export const Checkmark = styled.div`
  -ms-transform: scaleX(-1) rotate(-35deg); /* IE 9 */
  transform: scaleX(-1) rotate(-35deg);
  color: white;
`;

export const DeleteButton = styled.button`
  background-color: white;
  color: #7a89f3;
  border: none;
  cursor: pointer;
`;
