import { useQuery, useReactiveVar } from "@apollo/client";
import { useSession } from "next-auth/react";
import { Index } from ".";
import { invoiceVar } from "../../../apollo/client/Config";
import { invoiceMutation } from "../../../apollo/client/local/mutation";
import { GET_ALL_INVOICE_BY_USER } from "../../../apollo/client/queries/invoice";
import { LayOutPage } from "../../layout/pagelayout/LayOutPage.component";

export const HomeIndex = () => {
  const { data: session } = useSession();
  const { data, loading, error } = useQuery(GET_ALL_INVOICE_BY_USER, {
    variables: { _id: session?.id },
  });

  if (data) {
    invoiceMutation("invoices", data.userInvoices);
  }

  const { invoices } = useReactiveVar(invoiceVar);

  return (
    <LayOutPage>
      <Index userInvoices={invoices} />
    </LayOutPage>
  );
};
