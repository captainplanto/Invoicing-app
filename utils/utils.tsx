import * as Yup from "yup";
export const numberWithCommas = (total: number) => {
  return total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const validationSchema = Yup.object({
  userAddress: Yup.string().min(10).required("Address is required, please add an address"),
  userPostCode: Yup.string().required("Please add a PostCode"),
  userRegion: Yup.string().required("Please Select a Region"),
  userCountry: Yup.string().required("Please Select a Country"),
  clientName: Yup.string().min(5).required("Name is required, please add a name"),
  clientEmail: Yup.string().email("Enter a valid email").required("Email is required"),
  clientAddress: Yup.string().min(10).required("Address is required, please add an address"),
  clientPostCode: Yup.string().required("Please add a PostCode"),
  clientRegion: Yup.string().required("Please Select a Region"),
  clientCountry: Yup.string().required("Please Select a Country"),
  invoiceDate:Yup.string().required("Please choose a date"),
  paymentPlan:Yup.string().required("Please select a payment plan"),
  description:Yup.string().max(100).required('Provide the project details here')
});
export const MAX_LIMIT_PRICE = 10000000;
 export  const MAX_LIMIT_QTY = 1000;
 export  const isAllowed = (values: any, x: string) => {
    const { floatValue } = values;
    if (x === "price") {
      return floatValue < MAX_LIMIT_PRICE;
    } else {
      return floatValue < MAX_LIMIT_QTY;
    }
  };