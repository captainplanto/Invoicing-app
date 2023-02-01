import { useMutation } from "@apollo/client";
import { Loading } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { invoiceMutation } from "../../../apollo/client/local/mutation";
import { DELETE_INVOICE_MUTATION } from "../../../apollo/client/mutations";
import { GET_ALL_INVOICE_BY_USER, GET_INVOICE_DETAIL } from "../../../apollo/client/queries";
import { IButtonLogicProps } from "../../../type/type";
import { ButtonComponent } from "../Button.component";

export const InvoiceDeleteButtonComponent: FC<IButtonLogicProps> = ({
  _id,
}) => {
  const router = useRouter();
  
  const [errors, setErrors] = useState<string>("");
  const [deleteInvoice, { loading, data, error }] = useMutation(
    DELETE_INVOICE_MUTATION,
    { refetchQueries: [GET_ALL_INVOICE_BY_USER] }
  );
  const deleteInvoiceHandler = async () => {
    try {
      const delete_id_invoice = await deleteInvoice({
        variables: {
          id: _id,
        },
      });
      if (!loading) {
        router.push("/");
        invoiceMutation({
          invoiceError: true,
          invoiceStatus: "delete",
        });
      }
      if (error) {
        setErrors(error.message);
      }
    } catch (error: any) {}
  };

  return loading ? (
    <Loading />
  ) : (
    <ButtonComponent
      className="delete_button"
      showIcon={false}
      _id={_id}
      onClick={() => deleteInvoiceHandler()}
    >
      Delete
    </ButtonComponent>
  );
};
