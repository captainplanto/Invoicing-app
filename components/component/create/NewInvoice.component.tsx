import { TextField } from "@mui/material";
import { useFormik } from "formik";
import styled from "styled-components";
import { CountrySelectorComponent } from "../../common/CountrySelector.component";
import { validationSchema } from "../../../utils/utils";
import { PaymentSelectorComponent } from "../../common/PaymentSelector.component";
import { ListItemComponent } from "../../common/ListItem.component";
import { initialState } from "../../../constant/const";

export const CreateInvoiceComponent = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const formik = useFormik({
    initialValues: {
      ...initialState,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  /* onSubmit: (values) => {
      const dbValue = localStorage.getItem("totalPackage");
      let setValue = dbValue ? JSON.parse(dbValue) : [];
      formik.values.items = setValue;
    }, */
  const form = formik.values;
  const touch = formik.touched;
  const errors = formik.errors;

  return (
    <Container className={className}>
      <form onSubmit={formik.handleSubmit}>
        <h1>{title}</h1>
        <h2>Bill From</h2>
        <div className="error">
          <h3>Street Address</h3>
        </div>
        <TextField
          error={
            touch?.userAddress?.street && Boolean(errors?.userAddress?.street)
          }
          helperText={touch?.userAddress?.street && errors?.userAddress?.street}
          fullWidth
          className="text-area"
          type="text"
          onChange={formik.handleChange}
          value={form.userAddress.street}
          name="userAddress.street"
        />

        <CountrySelectorComponent
          country={form.userAddress.country}
          countryValue={form.userAddress.country}
          city={form.userAddress.city}
          postCodeValue={form.userAddress.postCode}
          inputNameRegion="userAddress.city"
          inputNamePostCode="userAddress.postCode"
          inputNameCountry="userAddress.country"
          isUser={true}
          touch={touch}
          errors={errors}
          form={form}
          onChange={(_, e) => {
            formik.handleChange(e);
          }}
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
              value={form.clientAddress.name}
              name="clientAddress.name"
              error={
                touch?.clientAddress?.name &&
                Boolean(errors?.clientAddress?.name)
              }
              helperText={
                touch?.clientAddress?.name && errors?.clientAddress?.name
              }
            />
          </div>

          <div>
            <h3>{`Client's Email`}</h3>
            <TextField
              fullWidth
              type="text"
              onChange={formik.handleChange}
              value={form.clientAddress.email}
              name="clientAddress.email"
              error={
                touch?.clientAddress?.email &&
                Boolean(errors?.clientAddress?.email)
              }
              helperText={
                touch?.clientAddress?.email && errors?.clientAddress?.email
              }
            />
          </div>
          <div>
            <h3>{`Client's Address`}</h3>
            <TextField
              fullWidth
              type="text"
              onChange={formik.handleChange}
              value={form.clientAddress.street}
              name="clientAddress.street"
              error={
                touch?.clientAddress?.street &&
                Boolean(errors?.clientAddress?.street)
              }
              helperText={
                touch?.clientAddress?.street && errors?.clientAddress?.street
              }
            />
          </div>
        </div>
        <CountrySelectorComponent
          country={form.clientAddress.country}
          countryValue={form.clientAddress.country}
          city={form.clientAddress.city}
          postCodeValue={form.clientAddress.postCode}
          inputNameRegion="clientAddress.city"
          inputNamePostCode="clientAddress.postCode"
          inputNameCountry="clientAddress.country"
          isUser={false}
          form={form}
          touch={touch}
          errors={errors}
          onChange={(_, e) => {
            formik.handleChange(e);
          }}
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
              value={form.invoiceDate}
              name="invoiceDate"
              error={touch?.invoiceDate && Boolean(errors?.invoiceDate)}
              helperText={touch?.invoiceDate && errors?.invoiceDate}
            />
          </div>
          <div className="mobile_margin">
            <h3>{`Payment Terms`}</h3>
            <PaymentSelectorComponent
              value={form.paymentPlan}
              onChange={(e: any) => {
                formik.handleChange(e);
              }}
            />
          </div>
        </div>

        <div className="description">
          <h3>{`Project Description`}</h3>
          <TextField
            fullWidth
            type="text"
            onChange={formik.handleChange}
            value={form.description}
            name="description"
            error={touch?.description && Boolean(errors?.description)}
            helperText={touch?.description && errors?.description}
          />
        </div>
        <div>
          <ListItemComponent form={form} formik={formik} />
        </div>
      </form>
    </Container>
  );
};

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
