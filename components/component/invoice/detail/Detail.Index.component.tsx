import { FC } from "react";
import { IDetailsCardInvoice } from "../../../../type/type";
import { InvoiceDetailsCardComponent } from "../../../common/InvoiceDetailsCard.component";
import { LayOutPage } from "../../../layout/pagelayout/LayOutPage.component";


export const DetailIndex: FC<IDetailsCardInvoice> = ({ invoice }) => {
  return (
    <LayOutPage>
      <InvoiceDetailsCardComponent invoice={invoice} />
    </LayOutPage>
  );
};
