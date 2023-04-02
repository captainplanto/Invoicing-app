import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { invoiceMutation } from "../../../apollo/client/local/mutation";
import { DELETE_INVOICE_MUTATION } from "../../../apollo/client/mutations";
import { GET_ALL_INVOICE_BY_USER } from "../../../apollo/client/queries";
import { DELETEINVOICE, STATUS } from "../../../constant/enum";
import { IButtonLogicProps } from "../../../type/type";
import { ButtonComponent } from "../Button.component";

export const InvoiceDeleteButtonComponent: FC<IButtonLogicProps> = ({
  _id,
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [deleteInvoice, { loading, data, error }] = useMutation(
    DELETE_INVOICE_MUTATION,
    { refetchQueries: [GET_ALL_INVOICE_BY_USER] }
  );
  const deleteInvoiceHandler = async () => {
    if (session && status === "authenticated") {
      try {
        deleteInvoice({
          variables: {
            id: _id,
          },
        });
        if (!loading && !error) {
          invoiceMutation({
            snackbarMessage: STATUS.DELETE,
            showSnackBar: true,
          });
          router.push("/");
        }
      } catch (error: any) {}
    }
  };

  return (
    <ButtonComponent
      className="delete_button"
      showIcon={false}
      _id={_id}
      onClick={() => deleteInvoiceHandler()}
    >
      {`${loading ? DELETEINVOICE.DELETING : DELETEINVOICE.DELETE}`}
    </ButtonComponent>
  );
};
