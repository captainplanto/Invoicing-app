import { Schema } from "mongoose";
import * as Yup from "yup";
import { STATUS_NAME } from "../type/type";

export const numberWithCommas = (total: number) => {
  return total?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const validationSchema = Yup.object({
  userAddress: Yup.object({
    street: Yup.string()
      .max(25)
      .required("Address is required, please add an address"),
    postCode: Yup.string().required("Add PostCode").max(6),
    city: Yup.string().required("Please Select a Region"),
    country: Yup.string().required("Please Select a Country"),
  }),
  clientAddress: Yup.object({
    name: Yup.string()
      .min(2)
      .max(15)
      .required("Name is required, please add a name"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required")
      .max(30),
    street: Yup.string()
      .min(10)
      .required("Address is required, please add an address")
      .max(25),
    postCode: Yup.string().required("Add PostCode").max(6),
    city: Yup.string().required("Please Select a Region"),
    country: Yup.string().required("Please Select a Country"),
  }),
  invoiceDate: Yup.string().required("Please choose a date"),
  paymentPlan: Yup.string().required("Please select a payment plan"),
  description: Yup.string()
    .required("Provide the project details here")
    .max(60),
});
export const MAX_LIMIT_PRICE = 10000000;
export const MAX_LIMIT_QTY = 1000;
export const isAllowed = (values: any, x: string) => {
  const { floatValue } = values;
  if (x === "price") {
    return floatValue < MAX_LIMIT_PRICE;
  } else {
    return floatValue < MAX_LIMIT_QTY;
  }
};

export const idToString = (idx: Schema.Types.ObjectId) => {
  return idx?.toString().slice(18, 24).toUpperCase();
};

export const statusColorCodeStyle = (children: string) =>
  children === STATUS_NAME.PAID
    ? STATUS_NAME.PAID
    : children === STATUS_NAME.PENDING
    ? STATUS_NAME.PENDING
    : STATUS_NAME.DRAFT;
