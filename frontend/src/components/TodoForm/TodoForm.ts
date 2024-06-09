import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border: 1px solid white;
  border-radius: 1rem;
  width: 80%;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #d0c4d9;
  border: none;
  cursor: pointer;
  margin-top: 0.3rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  background-color: #d0c4d9;
  border: none;
  color: #675ea9;
  font-size: 16px;
  font-weight: 600;
  width: 70%;
  &::placeholder {
    color: #675ea9;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:focus {
    outline: none;
  }
`;

export const AddImg = styled.img`
  width: 15px;
`;
