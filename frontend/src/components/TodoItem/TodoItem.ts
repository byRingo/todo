import styled from "styled-components";

export const Item = styled.form`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  background-color: #f5f2ff;
  padding: 1rem;
  border-radius: 1rem;
`;

export const Li = styled.li<{ $isCompleted: boolean }>`
  list-style: none;
  font-size: 30px;
  text-decoration: ${(props) => (props.$isCompleted ? "line-through" : "none")};
  width: 60%;
  color: ${(props) => (props.$isCompleted ? "#C9C7ED" : "#675ea9")};
  &:focus {
    outline: 1px solid #675ea9;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const CompleteButton = styled.button<{ $isCompleted: boolean }>`
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #675ea9;
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.$isCompleted ? "#7a89f3" : "white")};
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 400px) {
    width: 20px;
    height: 20px;
  }
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
  margin-left: auto;
  @media (max-width: 400px) {
    width: 20px;
  }
`;

export const DeleteImg = styled.img`
  width: 30px;
  @media (max-width: 400px) {
    width: 20px;
  }
`;
