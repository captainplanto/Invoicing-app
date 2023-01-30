import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FC } from "react";
import { invoiceMutation } from "../../../apollo/client/local/mutation";
import { MARK_INVOICE_AS_PAID_MUTATION } from "../../../apollo/client/mutations";
import { GET_ALL_INVOICE_BY_USER } from "../../../apollo/client/queries";
import { IButtonLogicProps } from "../../../type/type";
import { ButtonComponent } from "../Button.component";

export const InvoicePaidButtonComponent: FC<IButtonLogicProps> = ({ _id }) => {
  const router = useRouter();
  const [markInvoiceAsPaid, { loading }] = useMutation(
    MARK_INVOICE_AS_PAID_MUTATION,
    {
      refetchQueries: [GET_ALL_INVOICE_BY_USER],
    }
  );
  const markInvoiceAsPaidHandler = () => {
    try {
      markInvoiceAsPaid({
        variables: {
          id: _id,
          invoiceState: "paid",
        },
      });
      if (!loading) {
        router.push("/");
        invoiceMutation({
          invoiceError: true,
          invoiceStatus: "paid",
        });
      }
    } catch (error) {}
  };
  return (
    <ButtonComponent
      showIcon={false}
      _id={_id}
      onClick={markInvoiceAsPaidHandler}
    >
      Mark as Paid
    </ButtonComponent>
  );
};
