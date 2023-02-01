import { useMutation, useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { invoiceVar } from "../../../apollo/client/Config";
import { invoiceMutation } from "../../../apollo/client/local/mutation";
import { CREATE_NEW_INVOICE_MUTATION } from "../../../apollo/client/mutations";
import { GET_ALL_INVOICE_BY_USER } from "../../../apollo/client/queries/invoice";
import { IInvoiceForm } from "../../../type/type";
import { ButtonComponent } from "../Button.component";

export interface ISendProps {
  form: IInvoiceForm;
  formik: any;
}
export const SaveAndSendButtonComponent: FC<ISendProps> = ({
  form,
  formik,
}) => {
  const [createInvoice, { data, loading, error }] = useMutation(
    CREATE_NEW_INVOICE_MUTATION,
    { refetchQueries: [GET_ALL_INVOICE_BY_USER] }
  );
  const { itemEntryLists } = useReactiveVar(invoiceVar);
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const dbValue = localStorage.getItem("totalPackage");
    let setValue = dbValue ? JSON.parse(dbValue) : [];
    formik.values.items = setValue;
    createInvoice({
      variables: {
        userAddress: {
          street: form.userAddress.street,
          city: form.userAddress.city,
          postCode: form.userAddress.postCode,
          country: form.userAddress.country,
        },
        clientAddress: {
          street: form.clientAddress.street,
          city: form.clientAddress.city,
          postCode: form.clientAddress.postCode,
          country: form.clientAddress.country,
          name: form.clientAddress.name,
          email: form.clientAddress.email,
        },

        description: form.description,
        invoiceDate: form.invoiceDate,
        items: form.items,
        paymentPlan: form.paymentPlan,
        invoiceState: "pending",
        author: "",
      },
    });
    if (data) {
      formik.setValues({ ...formik.initialValues });
      localStorage.removeItem("totalPackage");
      invoiceMutation("itemEntryLists", !itemEntryLists);
    }
    if (error) {
      invoiceMutation("invoiceError", true);
      console.log(error.message, "message errrr");
    }
  };

  return (
    <ButtonComponent showIcon={false} onClick={handleSubmit}>
      Save & Send
    </ButtonComponent>
  );
};
