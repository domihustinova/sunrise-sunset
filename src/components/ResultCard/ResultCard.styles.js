import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 50px;
  border-top: 1px dashed #e2e6ea;
  background-color: #fffdf5;

  @media (min-width: 830px) {
    border-radius: 0 0 7.5px 7.5px;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;

  span {
    max-width: 500px;
    text-align: center;
  }

  svg {
    margin: 0 10px;

    &:nth-of-type(odd) {
      color: #3961aa;
    }
  }

  @media (max-width: 830px) {
    flex-direction: column;

    span {
      max-width: 300px;
    }

    svg {
      display: none;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;

  svg {
    margin: 0 5px;
  }
`;
