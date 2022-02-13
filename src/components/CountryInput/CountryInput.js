import React, { useState, useEffect, useRef } from "react";
import { useClickOutside } from "react-click-outside-hook";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { Label } from "../../App.styles";
import {
  CountrySelectedWrapper,
  CountrySelected,
  CountrySelectedClose,
  FieldWrapper,
  Input,
  InputWrapper,
  Wrapper,
} from "./CountryInput.styles";

import { PlacePicker } from "../PlacePicker/PlacePicker";

export const CountryInput = ({ countriesList, country, setCountry }) => {
  const [countryInput, setCountryInput] = useState("");
  const [showPlacePicker, setShowPlacePicker] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isClickedOutside) hidePlacePicker();
  }, [isClickedOutside]);

  const handlePlacePickerClick = (country) => {
    setCountry(country);
    hidePlacePicker();
  };

  const hidePlacePicker = () => {
    setShowPlacePicker(false);
    setCountryInput("");
  };

  const handleKeyDown = (e) => {
    if (countryInput === "" && e.key === "Backspace") {
      setCountry("");
    }
  };

  const handleCountryCloseClick = () => {
    setCountry("");
  };

  const handleCountryInputChange = (value) => {
    setCountryInput(value);
  };

  return (
    <Wrapper ref={parentRef}>
      <FieldWrapper onClick={() => inputRef.current.focus()}>
        <Label htmlFor="countryInput">Country:</Label>
        <InputWrapper>
          {country && (
            <CountrySelectedWrapper>
              <CountrySelected>{country}</CountrySelected>
              <CountrySelectedClose onClick={handleCountryCloseClick}>
                <FontAwesomeIcon icon={faClose} />
              </CountrySelectedClose>
            </CountrySelectedWrapper>
          )}
          <Input
            ref={inputRef}
            id="countryInput"
            value={countryInput}
            countrySelected={country ? true : false}
            onFocus={() => setShowPlacePicker(true)}
            onChange={({ target }) => handleCountryInputChange(target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            autoComplete="off"
          />
        </InputWrapper>
      </FieldWrapper>

      {showPlacePicker && (
        <PlacePicker
          countriesList={countriesList}
          searchInput={countryInput}
          callback={handlePlacePickerClick}
        />
      )}
    </Wrapper>
  );
};
