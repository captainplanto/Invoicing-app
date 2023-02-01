import { useMutation, useReactiveVar } from "@apollo/client";
import { Schema } from "mongoose";
import { useCallback } from "react";
import { invoiceVar } from "../../../apollo/client/Config";
import { invoiceMutation } from "../../../apollo/client/local/mutation";
import { MARK_INVOICE_AS_PAID_MUTATION } from "../../../apollo/client/mutations";
import { GET_ALL_INVOICE_BY_USER } from "../../../apollo/client/queries";
import { ButtonComponent } from "../Button.component";

export const InvoicePaidButtonComponent = ({
  _id,
}: {
  _id: Schema.Types.ObjectId;
}) => {
  const [markInvoiceAsPaid, { loading }] = useMutation(
    MARK_INVOICE_AS_PAID_MUTATION,
    { refetchQueries: [GET_ALL_INVOICE_BY_USER] }
  );
  const { invoiceStatus } = useReactiveVar(invoiceVar);

  const completeInvoice = useCallback(() => {
    const markInvoiceAsPaidHandler = () => {
      try {
        markInvoiceAsPaid({
          variables: {
            id: _id,
            invoiceState: "paid",
          },
        });
        if (!loading) {
          invoiceMutation({
            invoiceError: true,
            invoiceStatus: "paid",
          });
        }
      } catch (error) {}
    };

    return (
      <>
        <ButtonComponent
          showIcon={false}
          _id={_id}
          onClick={
            invoiceStatus === "paid" ? undefined : markInvoiceAsPaidHandler
          }
        >
          {invoiceStatus === "paid" ? " Marked as paid" : "Mark as paid"}
        </ButtonComponent>
      </>
    );
  }, [_id, invoiceStatus, loading, markInvoiceAsPaid]);

  return completeInvoice();
};
