import styled from "styled-components";

export const InnerWrapper = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 101;

  width: 500px;
  height: 300px;

  background: white;
  background: rgb(255, 255, 255);
  border-radius: 5px;

  box-shadow: rgb(37 42 49 / 16%) 0px 4px 8px 0px,
    rgb(37 42 49 / 24%) 0px 8px 24px 0px;

  @media (max-width: 830px) {
    width: 350px;
  }
`;

export const CountriesWrapper = styled.div`
  position: absolute;
  top: 75px;
  height: 225px;
  width: 100%;
  overflow: scroll;
`;

export const Row = styled.div`
  padding: 10px 25px;
  cursor: pointer;

  &:hover {
    background-color: #ebf2ff;
    color: blac;
  }

  @media (max-width: 830px) {
    border-bottom: 1px solid #e8eaed;
    text-align: center;
    margin: 0 10px;
  }
`;
