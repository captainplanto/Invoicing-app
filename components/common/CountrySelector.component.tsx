import { TextField } from "@mui/material";
import { FC } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import styled from "styled-components";

interface ISelector {
  countryRegion: string;
  countryValue: string;
  regionValue: string;
  postCodeValue: number;
  onChange: (_: any, e: any) => void;
  onTextChange: (e: any) => void;
  regionError: boolean | undefined;
  regionHelperText: string | false | undefined;
  countryError: boolean | undefined;
  countryHelperText: string | false | undefined;
  postalCodeError: boolean | undefined;
  postalCodeHelperText: string | false | undefined;
  inputNameRegion: string;
  inputNamePostCode: string;
  inputNameCountry: string;
}

export const CountrySelectorComponent: FC<ISelector> = ({
  countryRegion,
  regionValue,
  postCodeValue,
  countryValue,
  onChange,
  regionError,
  countryError,
  postalCodeError,
  regionHelperText,
  countryHelperText,
  postalCodeHelperText,
  onTextChange,
  inputNameRegion,
  inputNamePostCode,
  inputNameCountry,
  ...props
}) => {
  return (
    <Container>
      <div className="country_region">
        <div>
          <h3>City</h3>
          <RegionDropdown
            blankOptionLabel="Region"
            country={countryRegion}
            value={regionValue}
            onChange={onChange}
            name={inputNameRegion}
          />
        </div>
        <div>
          <h3>Post Code</h3>
          <TextField
            fullWidth
            className="spin_button"
            type="number"
            onChange={onTextChange}
            value={postCodeValue}
            name={inputNamePostCode}
            error={postalCodeError}
            helperText={postalCodeHelperText}
            placeholder='PostCode'
          />
        </div>
        <div>
          <h3>Country</h3>
          <CountryDropdown
            defaultOptionLabel="Country"
            id="select_box"
            value={countryValue}
            name={inputNameCountry}
            onChange={onChange}
            error={countryError}
            helperText={countryHelperText}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  h3 {
    color: var(--light-blue-bg);
    font-size: 1.1rem;
    font-weight: 300;
  }
  .error {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    justify-content: space-between;
  }

  .text-area {
    margin-bottom: 2rem;
  }
  .country_region {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    .spin_button {
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
      }
    }
    select {
      width: 100%;
      border-radius: 4px;
      border: 1px solid var(--light-blue-bg);
      padding: 1.1rem;
      font-weight: 800;
    }

    @media screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 6px;
      div:nth-child(3) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }
  input {
    font-weight: 800;
  }
`;
// grid-template-columns: 10rem 10rem 10rem;
//gap: 2rem;
