import { TextField } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import { FC } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import styled from "styled-components";
import { IInvoiceForm } from "../../type/type";
import { useTheme as useNextTheme } from "@nextui-org/react";

interface ISelector {
  countryValue: string;
  country: string;
  city: string;
  postCodeValue: number;
  onChange: (_: any, e: any) => void;
  onTextChange: (e: any) => void;
  inputNameRegion: string;
  inputNamePostCode: string;
  inputNameCountry: string;
  form: object;
  touch: FormikTouched<IInvoiceForm> | undefined;
  errors: FormikErrors<IInvoiceForm> | undefined;
  isUser: boolean;
}

export const CountrySelectorComponent: FC<ISelector> = ({
  countryValue,
  city,
  postCodeValue,
  country,
  onChange,
  onTextChange,
  inputNameRegion,
  inputNamePostCode,
  inputNameCountry,
  form,
  touch,
  errors,
  isUser,
  ...props
}) => {
  const { theme } = useNextTheme();
  return (
    <Container theme={theme}>
      <div className="country_region">
        <div>
          <h3>City</h3>
          <RegionDropdown
            blankOptionLabel="Region"
            country={country}
            value={city}
            onChange={onChange}
            name={inputNameRegion}
            error={
              isUser
                ? touch?.userAddress?.city && Boolean(errors?.userAddress?.city)
                : touch?.clientAddress?.city &&
                  Boolean(errors?.clientAddress?.city)
            }
            helperText={
              isUser
                ? touch?.userAddress?.city && errors?.userAddress?.city
                : touch?.clientAddress?.city && errors?.clientAddress?.city
            }
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
            placeholder="PostCode"
            error={
              isUser
                ? touch?.userAddress?.postCode &&
                  Boolean(errors?.userAddress?.postCode)
                : touch?.clientAddress?.postCode &&
                  Boolean(errors?.clientAddress?.postCode)
            }
            helperText={
              isUser
                ? touch?.userAddress?.postCode && errors?.userAddress?.postCode
                : touch?.clientAddress?.postCode &&
                  errors?.clientAddress?.postCode
              //   replaceString(errors?.clientAddress?.postCode)
            }
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
            error={
              isUser
                ? touch?.userAddress?.country &&
                  Boolean(errors?.userAddress?.country)
                : touch?.clientAddress?.country &&
                  Boolean(errors?.clientAddress?.country)
            }
            helperText={
              isUser
                ? touch?.userAddress?.country && errors?.userAddress?.country
                : touch?.clientAddress?.country &&
                  errors?.clientAddress?.country
            }
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
      border-radius: 3px;
      border-color: ${(props) => props.theme.colors.input_border.value};
      font-family: ${(props) => props.theme.fonts.sans};
      background: ${(props) => props.theme.colors.text_filed_bg.value};
      color: ${(props) => props.theme.colors.child_4.value};
      font-weight: 800;
      padding: 1.5rem;
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
`;
