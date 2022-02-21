import React from "react";

import { InnerWrapper, CountriesWrapper, Row } from "./PlacePicker.styles";

import { COUNTRIES } from "../../data/data";

export const PlacePicker = ({ searchInput, callback }) => (
  <InnerWrapper>
    <CountriesWrapper>
      {COUNTRIES.filter((val) =>
        val.name.toLowerCase().includes(searchInput.toLowerCase())
      ).map((val) => (
        <Row onClick={() => callback(val.name)} key={val.country}>
          {val.name}
        </Row>
      ))}
    </CountriesWrapper>
  </InnerWrapper>
);
