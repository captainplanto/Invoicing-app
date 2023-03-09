import { useQuery, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { invoiceVar } from "../../../apollo/client/Config";
import { invoiceMutation } from "../../../apollo/client/local/mutation";
import { GET_INVOICE_DETAIL } from "../../../apollo/client/queries";
import { InvoiceDetailsCardComponent } from "../../common/InvoiceDetailsCard.component";
import { SnackBarComponent } from "../../common/SnackBarComponent";
import { LayOutPage } from "../../layout/pagelayout/LayOutPage.component";

export const DetailIndex = () => {
  const router = useRouter();
  const { data } = useQuery(GET_INVOICE_DETAIL, {
    variables: {
      _id: router.query.invoiceId,
    },
  });
  const { invoiceDetails } = useReactiveVar(invoiceVar);
  useEffect(() => {
    if (data) {
      invoiceMutation("invoiceDetails", data.invoiceDetail);
    }
  }, [data]);
  return (
    <LayOutPage>
      <SnackBarComponent />
      <InvoiceDetailsCardComponent invoice={invoiceDetails} />
    </LayOutPage>
  );
};
