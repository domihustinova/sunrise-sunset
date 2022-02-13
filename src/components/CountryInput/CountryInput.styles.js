import styled from "styled-components";
import { SearchFieldWrapper } from "../../App.styles";

export const FieldWrapper = styled(SearchFieldWrapper)`
  position: relative;
  z-index: 102;
  width: 300px;
  background-color: white;

  @media (min-width: 830px) {
    width: 450px;
  }
`;

export const CountrySelectedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgb(255, 255, 255);
  background-color: #3961aa;
  height: 28px;
  padding-right: 10px;
  padding-left: 8px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
  line-height: 28px;
`;

export const CountrySelected = styled.div`
  white-space: nowrap;
`;

export const CountrySelectedClose = styled.div`
  margin-left: 10px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  outline: 0px;
  box-sizing: border-box;
  height: 36px;
  padding: 0px 8px;
  color: rgb(37, 42, 49);
  font-weight: 500;
  border: 0px;
  cursor: text;
  transition: all 0.5s ease 0s;
  font-family: "Poppins", sans-serif;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 0%;
  height: 28px;
  margin-left: 10px;
  overflow: auto hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;
