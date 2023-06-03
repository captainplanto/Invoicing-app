import { useQuery, useReactiveVar } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Index } from ".";
import { invoiceVar } from "../../../apollo/client/Config";
import { invoiceMutation } from "../../../apollo/client/local/mutation";
import { GET_ALL_INVOICE_BY_USER } from "../../../apollo/client/queries/invoice";
import { SnackBarComponent } from "../../common/SnackBarComponent";
import { LayOutPage } from "../../layout/pagelayout/LayOutPage.component";
//ToDo: check why session here is thrwoing type error, id doesn't exisit on session.
export const HomeIndex = () => {
  const { data: session } = useSession() as any;
  const { invoices, showSnackBar } = useReactiveVar(invoiceVar);
  const { data } = useQuery(GET_ALL_INVOICE_BY_USER, {
    variables: { _id: session && session.id},
  });

  useEffect(() => {
    if (data) {
      invoiceMutation("invoices", data.userInvoices);
    }
  }, [data]);

  return (
    <LayOutPage>
      {showSnackBar === true && <SnackBarComponent />}
      <Index userInvoices={invoices} />
    </LayOutPage>
  );
};
