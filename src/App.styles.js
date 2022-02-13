import styled from "styled-components";

export const Card = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  border-top: 1px dashed #e2e6ea;
  border-bottom: 1px dashed #e2e6ea;
  background-color: #fff;

  @media (min-width: 830px) {
    width: 800px;
    margin: 0 auto;
    border: none;
    border-radius: 7.5px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const SearchFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  @media (min-width: 830px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchFieldWrapper = styled.div`
  height: 40px;
  border: 1px solid #e2e6ea;
  border-radius: 5px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.35s ease-in-out;

  &:focus-within,
  &:hover {
    border: 1px solid #3961aa;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 120px;
  height: 44px;
  padding: 12px 24px;
  margin-bottom: 25px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ disabled }) => (disabled ? "#e2e6ea" : "#3961aa")};
  background-color: white;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border: 1px solid ${({ disabled }) => (disabled ? "#e2e6ea" : "#3961aa")};
  border-radius: 5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.3s ease-in-out;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    font-size: 16px;
  }

  &:active,
  &:focus,
  &:hover {
    outline: none;
    color: ${({ disabled }) => (disabled ? "#e2e6ea" : "#3961aa")};
    background-color: ${({ disabled }) => (disabled ? "#fff" : "#ebf2ff")};
    opacity: 0.9;
  }
`;
