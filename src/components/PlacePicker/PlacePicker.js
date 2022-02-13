import React from "react";

import { InnerWrapper, CountriesWrapper, Row } from "./PlacePicker.styles";

export const PlacePicker = ({ countriesList, searchInput, callback }) => (
  <InnerWrapper>
    <CountriesWrapper>
      {countriesList
        .filter((val) =>
          val.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((val) => (
          <Row onClick={() => callback(val.name)} key={val.country}>
            {val.name}
          </Row>
        ))}
    </CountriesWrapper>
  </InnerWrapper>
);
