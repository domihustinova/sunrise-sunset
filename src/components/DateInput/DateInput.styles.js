import styled from "styled-components";
import { SearchFieldWrapper } from "../../App.styles";

export const Wrapper = styled(SearchFieldWrapper)`
  width: 300px;
  margin-bottom: 20px;

  @media (min-width: 830px) {
    width: 200px;
    margin-right: 25px;
    margin-bottom: 0px;
  }
`;

export const Input = styled.input`
  width: 75px;
  height: 40px;
  border: none;
  padding: 5px 15px;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  outline: none;

  ::placeholder {
    color: #e2e6ea;
    opacity: 1;
  }

  @media (max-width: 830px) {
    width: 180px;
  }
`;
