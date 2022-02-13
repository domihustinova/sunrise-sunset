import React from "react";
import { format } from "date-fns";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { FaGlobeEurope } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi";

import { Row, Title, Wrapper } from "./ResultCard.styles";

export const ResultCard = ({
  displayedCountry,
  displayedDate,
  sunrise,
  sunset,
}) => (
  <Wrapper>
    <Title>
      <FaGlobeEurope /> <span>{displayedCountry} </span>
      <AiOutlineLine /> {format(displayedDate, "dd.MM.yyyy")}
      <HiOutlineCalendar />
    </Title>
    <Row>
      <FiSunrise /> Sunrise is at {sunrise} UTC
    </Row>
    <Row>
      <FiSunset /> Sunset is at {sunset} UTC
    </Row>
  </Wrapper>
);
