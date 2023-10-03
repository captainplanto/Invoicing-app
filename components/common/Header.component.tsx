import { useReactiveVar } from "@apollo/client";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import { invoiceVar } from "../../apollo/client/Config";
import { DrawerComponent } from "./Drawer.component";
import { FilterComponent } from "./Filter.component";
import { HeaderTimeComponent } from "./HeaderTimeComponent";

export const HeaderComponent = () => {
  const { invoices } = useReactiveVar(invoiceVar);
  const invoiceLengthDesktop =
    invoices && invoices?.length > 1
      ? `There are ${invoices.length} total invoices`
      : `There is ${invoices.length} total invoice`;
  const invoiceLengthMobile =
    invoices && invoices.length > 1
      ? `${invoices.length} total invoices`
      : `${invoices.length} total invoice`;

  return (
    <>
      <HeaderTimeComponent />
      <Container>
        <div>
          <h1>Invoices</h1>
          <span className="desktop_view">{invoiceLengthDesktop}</span>
          <span className="mobile_view">{invoiceLengthMobile}</span>
        </div>
        <div className="filter">
          <FilterComponent
            desktop_view="desktop_view"
            mobile_view="mobile_view"
          />
          <DrawerComponent LeftDrawer />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  .edit_button {
    background: grey;
    &:hover {
      background: red;
    }
  }
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 3rem;
  }
  span {
    color: var(--main-grey);
    font-size: 1.2rem;
    line-height: 0;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 5rem;
    @media screen and (max-width: 500px) {
      gap: 1rem;
    }
  }
  .desktop_view {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .mobile_view {
    @media screen and (min-width: 601px) {
      display: none;
    }
  }
`;
