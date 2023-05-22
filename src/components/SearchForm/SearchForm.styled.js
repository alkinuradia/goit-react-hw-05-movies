import styled from 'styled-components';

export const Form = styled.form`
 text-align: center;
width: 100%;

  margin-bottom: 10px;
  background-color: #17bccf;
  padding: 20px;
 box-shadow: 5px 5px 10px #676b6b, -5px -5px 10px #ffffff;
`;
export const InputForm = styled.input`
 margin-right: 5px;
width: 350px;
  padding: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  border-radius: 4px;
`;
export const BtnSubmit = styled.button`
color:#fff;
  border: none;
  border-radius: 5px;
  background-color: #0496c2;
  padding: 10px;
  font-size: 18px;
  transition: all 0.3s;


  &:hover,
  &:focus {
    &:not([disabled]) {
      box-shadow: 0 0 5px #000;
      cursor: pointer;
    }
  }
`;


