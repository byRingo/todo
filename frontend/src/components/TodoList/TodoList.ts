import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 75%;
`;

export const FormHeader = styled.h3`
  color: #675ea9;
  padding: 2rem;
  border-bottom: 1px solid #c9c7ed;
  font-weight: 900;
  font-family: "Jacques Francois Shadow", serif;
  text-align: center;
  font-size: 30px;
  margin: 0;
`;

export const TodoCanvas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 3rem;
  background-color: #d0c4d9;
  width: 80%;
  overflow-y: auto;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  scrollbar-color: #c9c7ed #f5f2ff;
  scrollbar-width: thin;
`;
