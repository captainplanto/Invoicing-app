import { FC } from "react";
import styled from "styled-components";
import {  IUserInvoiceProps } from "../../../type/type";
import { HeaderComponent } from "../../common/Header.component";
import { InvoiceCardComponent } from "../../common/InvoiceCardComponent";

export const Index: FC<IUserInvoiceProps> = ({ userInvoices }) => {
  return (
    <Container>
      <HeaderComponent />
      <main>
        <InvoiceCardComponent userInvoices={userInvoices} />
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



















