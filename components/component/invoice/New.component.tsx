import { TextField } from "@mui/material";
import { useFormik } from "formik";
import styled from "styled-components";
import { CountrySelectorComponent } from "../../common/CountrySelector.component";
import { validationSchema } from "../../../utils/utils";
import { PaymentSelectorComponent } from "../../common/PaymentSelector.component";
import { ListItemComponent } from "../../common/ListItem.component";
import { IInvoiceForm } from "../../../type/type";

export const CreateInvoiceComponent = ({ title }: { title: string }) => {
  const formik = useFormik({
    initialValues: {
      userAddress: "",
      userRegion: "",
      userCountry: "",
      userPostCode: 1001,
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      clientRegion: "",
      clientCountry: "",
      clientPostCode: 1001,
      invoiceDate: new Date(),
      paymentPlan: "",
      description: "",
      items: [],
    } as IInvoiceForm,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const dbValue = localStorage.getItem("totalPackage");
      const setValue = dbValue ? JSON.parse(dbValue) : [];
      formik.values.items = setValue;
      console.log(values);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <h1>{title}</h1>
        <h2>Bill From</h2>
        <div className="error">
          <h3>Street Address</h3>
        </div>

        <TextField
          error={
            formik.touched.userAddress && Boolean(formik.errors.userAddress)
          }
          helperText={formik.touched.userAddress && formik.errors.userAddress}
          fullWidth
          className="text-area"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userAddress}
          name="userAddress"
        />

        <CountrySelectorComponent
          countryRegion={formik.values.userCountry}
          countryValue={formik.values.userCountry}
          regionValue={formik.values.userRegion}
          postCodeValue={formik.values.userPostCode}
          inputNameRegion="userRegion"
          inputNamePostCode="userPostCode"
          inputNameCountry="userCountry"
          onChange={(_, e) => {formik.handleChange(e)}}
          regionError={formik.touched.userRegion && Boolean(formik.errors.userRegion)}
          regionHelperText={formik.touched.userRegion && formik.errors.userRegion}
          countryError={formik.touched.userCountry && Boolean(formik.errors.userCountry)}
          countryHelperText={formik.touched.userCountry && formik.errors.userCountry}
          postalCodeError={formik.touched.userPostCode && Boolean(formik.errors.userPostCode)}
          postalCodeHelperText={formik.touched.userPostCode && formik.errors.userPostCode}
          onTextChange={formik.handleChange}
        />
        <div className="client_div">
          <h2>Bill To</h2>
          <div>
            <h3>{`Client's Name`}</h3>
            <TextField
              fullWidth
              type="text"
              onChange={formik.handleChange}
              value={formik.values.clientName}
              name="clientName"
              error={formik.touched.clientName && Boolean(formik.errors.clientName)}
              helperText={formik.touched.clientName && formik.errors.clientName}
            />
          </div>

          <div>
            <h3>{`Client's Email`}</h3>
            <TextField
              fullWidth
              type="text"
              onChange={formik.handleChange}
              value={formik.values.clientEmail}
              name="clientEmail"
              error={formik.touched.clientEmail && Boolean(formik.errors.clientEmail)}
              helperText={formik.touched.clientEmail && formik.errors.clientEmail}
            />
          </div>
          <div>
            <h3>{`Client's Address`}</h3>
            <TextField
              fullWidth
              type="text"
              onChange={formik.handleChange}
              value={formik.values.clientAddress}
              name="clientAddress"
              error={formik.touched.clientAddress &&Boolean(formik.errors.clientAddress)}
              helperText={formik.touched.clientAddress && formik.errors.clientAddress}
            />
          </div>
        </div>
        <CountrySelectorComponent
          countryRegion={formik.values.clientCountry}
          countryValue={formik.values.clientCountry}
          regionValue={formik.values.clientRegion}
          postCodeValue={formik.values.clientPostCode}
          inputNameRegion="clientRegion"
          inputNamePostCode="clientPostCode"
          inputNameCountry="clientCountry"
          onChange={(_, e) => {formik.handleChange(e)}}
          regionError={formik.touched.clientRegion && Boolean(formik.errors.clientRegion)}
          regionHelperText={formik.touched.clientRegion && formik.errors.clientRegion}
          countryError={formik.touched.clientCountry && Boolean(formik.errors.clientCountry)}
          countryHelperText={formik.touched.clientCountry && formik.errors.clientCountry}
          postalCodeError={formik.touched.clientPostCode &&Boolean(formik.errors.clientPostCode)}
          postalCodeHelperText={formik.touched.clientPostCode && formik.errors.clientPostCode}
          onTextChange={formik.handleChange}
        />

        <div className="date_pay_term">
          <div>
            <h3>{`Invoice Date`}</h3>
            <TextField
              fullWidth
              className="date"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.invoiceDate}
              name="invoiceDate"
              error={formik.touched.invoiceDate && Boolean(formik.errors.invoiceDate)}
              helperText={formik.touched.invoiceDate && formik.errors.invoiceDate}
            />
          </div>
          <div className="mobile_margin">
            <h3>{`Payment Terms`}</h3>
            <PaymentSelectorComponent
              value={formik.values.paymentPlan}
              onChange={(e: any) => {formik.handleChange(e)}}
            />
          </div>
        </div>

        <div className="description">
          <h3>{`Project Description`}</h3>
          <TextField
            fullWidth
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
            name="description"
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </div>
        <div>
          <ListItemComponent />
        </div>
      </form>
    </Container>
  );
};
//  <button type="submit">Submit</button>
const Container = styled.div`
  width: 40vw;
  max-width: 100vw;
  padding: 3rem 5rem 0 13rem;
  @media screen and (max-width: 1500px) {
    min-width: 60vw;
    padding: 3rem 5rem 0 13rem;
  }
  @media screen and (max-width: 820px) {
    min-width: 84vw;
    padding: 6rem;
    margin-top: 10rem;
  }
  @media screen and (max-width: 600px) {
    min-width: 100vw;
    padding: 2rem;
    margin-top: 10rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 550;
    margin-bottom: 2rem;
  }
  h2 {
    color: var(--main-blue);
    margin-bottom: 1rem;
  }
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
  .client_div {
    div {
      margin-bottom: 0.5rem;
    }
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    font-weight: 800;
    font-family: var(--main-font);
  }
  input {
    font-weight: 800;
  }

  .date_pay_term {
    width: 100%;
    gap: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 500px) {
      display: block;

      .mobile_margin {
        margin-top: 3rem;
      }
    }
  }
  .description {
    margin-top: 3rem;
  }
`;
