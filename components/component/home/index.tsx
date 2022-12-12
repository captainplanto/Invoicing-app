import { FC } from "react";
import styled from "styled-components";
import { IDBInvoices } from "../../../type/type";
import { ConfirmationComponent } from "../../common/Confirmation.component";
import { DrawerComponent } from "../../common/Drawer.component";
import { HeaderComponent } from "../../common/Header.component";
import { InvoiceCardComponent } from "../../common/InvoiceCardComponent";
import { CreateInvoiceComponent } from "../invoice/New.component";

export const Index: FC<IDBInvoices> = ({ invoices }) => {
  return (
    <Container>
      <HeaderComponent />
      <DrawerComponent>
        <CreateInvoiceComponent title="New Invoice" />
      </DrawerComponent>
      <main>
        <InvoiceCardComponent invoices={invoices} />
      </main>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 8rem;
  main {
    margin-top: 8rem;
  }
  @media screen and (max-width: 820px) {
    width: 90%;
  }
`;
