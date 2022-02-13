import React, { useState, useEffect } from "react";
import { getSunriseSunsetInfo } from "sunrise-sunset-api";
import { format } from "date-fns";
import { IoSunnyOutline } from "react-icons/io5";

import { Button, Card, SearchFields } from "./App.styles";

import { DateInput } from "./components/DateInput/DateInput";
import { CountryInput } from "./components/CountryInput/CountryInput";
import { ResultCard } from "./components/ResultCard/ResultCard";

import { COUNTRIES } from "./data/data";

function App() {
  const [date, setDate] = React.useState(new Date());
  const [country, setCountry] = useState("Czech Republic");
  const [displayedCountry, setDisplayedCountry] = useState(null);
  const [displayedDate, setDisplayedDate] = useState(null);
  const [sunriseSunsetResponse, setSunriseSunsetResponse] = useState(null);
  const [showResultCard, setShowResultCard] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(
      country === displayedCountry &&
        format(date, "yyyy-MM-dd") === format(displayedDate, "yyyy-MM-dd")
        ? true
        : date && country
        ? false
        : true
    );
  }, [date, country, displayedDate, displayedCountry]);

  const getLatLong = (inputCountry) => {
    const foundCountry = COUNTRIES.find(
      (country) => country.name.toLowerCase() === inputCountry.toLowerCase()
    );

    return {
      latitude: Number(foundCountry.latitude),
      longitude: Number(foundCountry.longitude),
    };
  };

  const getSunriseSunset = async (latitude, longitude) => {
    const response = await getSunriseSunsetInfo({
      latitude: latitude,
      longitude: longitude,
      date: format(date, "yyyy-MM-dd"),
    });

    return response;
  };

  const handleShowButtonClick = async () => {
    const { latitude, longitude } = getLatLong(country);
    const sunriseSunsetInfo = await getSunriseSunset(latitude, longitude);

    setDisplayedDate(date);
    setDisplayedCountry(country);
    setSunriseSunsetResponse(sunriseSunsetInfo);
    setShowResultCard(true);
    setIsButtonDisabled(true);
  };

  return (
    <Card>
      <SearchFields>
        <DateInput date={date} setDate={setDate} />
        <CountryInput
          countriesList={COUNTRIES}
          country={country}
          setCountry={setCountry}
        />
      </SearchFields>

      <Button onClick={handleShowButtonClick} disabled={isButtonDisabled}>
        <IoSunnyOutline />
        Show
      </Button>

      {showResultCard && (
        <ResultCard
          displayedCountry={displayedCountry}
          displayedDate={displayedDate}
          sunrise={sunriseSunsetResponse.sunrise}
          sunset={sunriseSunsetResponse.sunset}
        />
      )}
    </Card>
  );
}

export default App;
