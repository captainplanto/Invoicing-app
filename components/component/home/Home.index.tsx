import { FC } from "react";
import { Index } from ".";
import { client } from "../../../apollo/client/Config";
import { DATA_ALL_INVOICE_BY_USER } from "../../../apollo/client/queries/invoice";
import { IDBInvoices } from "../../../type/type";
import { LayOutPage } from "../../layout/pagelayout/LayOutPage.component";

export const HomeIndex: FC<IDBInvoices> = ({ invoices }) => {
  client.writeQuery({query: DATA_ALL_INVOICE_BY_USER,
    data: {
      invoices: invoices.length,
    },
  });
 
  return (
    <LayOutPage>
      <Index invoices={invoices} />
    </LayOutPage>
  );
};
