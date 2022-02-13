import React from "react";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { Label } from "../../App.styles";
import { Input, Wrapper } from "./DateInput.styles";

export const DateInput = ({ date, setDate }) => (
  <Wrapper>
    <Label htmlFor="dateInput">Date:</Label>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="dd/MM/yyyy"
        value={date}
        onChange={(newValue) => setDate(newValue)}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              svg: { color: "#3961aa" },
              label: { color: "#3961aa" },
            }}
          >
            <Input
              id="dateInput"
              autoComplete="off"
              ref={inputRef}
              {...inputProps}
            />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  </Wrapper>
);
