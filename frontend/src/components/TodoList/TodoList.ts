import styled from "styled-components";

export const Ul = styled.ul`
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  width: 75%;
`;

export const FormHeader = styled.h3`
  color: #7a89f3;
  padding: 1rem;
  border-bottom: 1px solid #c9c7ed;
  width: 80%;
  text-align: center;
  font-size: 30px;
  margin: 0;
`;

export const TodoCanvas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 30%;

  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (max-width: 900px) {
    width: 80%;
  }
`;
