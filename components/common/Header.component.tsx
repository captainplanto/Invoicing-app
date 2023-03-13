import { useReactiveVar } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { invoiceVar } from "../../apollo/client/Config";
import { addInvoiceIcon } from "../../constant/const";
import { ButtonComponent } from "./Button.component";
import { DrawerComponent } from "./Drawer.component";
import { FilterComponent } from "./Filter.component";

export const HeaderComponent = () => {
  const { data: session, status } = useSession();
  const [day, setDay] = useState<string>();
  const { invoices } = useReactiveVar(invoiceVar);

  const invoiceLengthDesktop =
    invoices && invoices?.length > 1
      ? `There are ${invoices.length} total invoices`
      : `There is ${invoices.length} total invoice`;
  const invoiceLengthMobile =
    invoices && invoices.length > 1
      ? `${invoices.length} total invoices`
      : `${invoices.length} total invoice`;
  useEffect(() => {
    const date = new Date();
    const hour = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
    });
    setDay(hour);
  }, []);

  return (
    <>
      <p style={greetings}>
        {`${day}` < "12"
          ? ` Good Morning`
          : `${day}` > "12"
          ? `Good Afternoon`
          : `${day}` > "16"
          ? `Good Evening`
          : ""}{" "}
        {session?.user.name}
      </p>
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
const greetings = {
  fontSize: "1.3rem",
  fontWeight: "700",
};

export const CreateNewInvoiceButton = ({
  onClick,
}: {
  onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
}) => {
  return (
    <ButtonContainer>
      <ButtonComponent icon={addInvoiceIcon} showIcon onClick={onClick}>
        <div className="desktop_view">New Invoice</div>
        <div className="mobile_view">New</div>
      </ButtonComponent>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.div`
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
