import { FC } from "react";
import styled from "styled-components";
import { CREATE_INVOICE_QUERY } from "../../../apollo/queries";
import { useQuery } from "@apollo/client";
import { IDBInvoices } from "../../../type/type";
import { HeaderComponent } from "../../common/Header.component";
import { InvoiceCardComponent } from "../../common/InvoiceCardComponent";

export const Index: FC<IDBInvoices> = ({ invoices }) => {
  const { data } = useQuery(CREATE_INVOICE_QUERY);
  return (
    <Container>
      <HeaderComponent />
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

/*
  <Link href="/register">REGISTER</Link>
      <Link href="/login">LOGIN</Link>


*/
