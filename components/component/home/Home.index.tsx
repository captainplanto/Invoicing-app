import { FC } from "react";
import styled from "styled-components";
import { Index } from ".";
import { IDBInvoices } from "../../../type/type";
import { SideBarComponent } from "../../common/Sidebar.component";
import { LayOutComponent } from "../../layout/LayoutComponent";

export const HomeIndex: FC<IDBInvoices> = ({ invoices }) => {
  return (
    <Container>
      <SideBarComponent  />
      <LayOutComponent>
        <Index invoices={invoices} />
      </LayOutComponent>
    </Container>
  );
};
const Container = styled.div`
  height: 200vh;
  display: grid;
  grid-template-columns: 8.5rem 11fr;
  @media screen and (max-width: 820px) {
    display: block;
  }

`;
// background-color: var(--light-bg);
