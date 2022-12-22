import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { addInvoiceIcon } from "../../constant/const";
import { useScreenSize } from "../../hooks/useScreenSize";
import { ButtonComponent } from "./Button.component";
import { DrawerComponent } from "./Drawer.component";
import { FilterComponent } from "./Filter.component";

export const HeaderComponent = () => {
  const { screenSize } = useScreenSize();
  const { data: session, status } = useSession();
  const [day, setDay] = useState<string>();
  useEffect(() => {
    const date = new Date();
    const hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: false });
    setDay(hour);
  }, []);

  return (
    <>
      <p style={greetings}>{`${day}` < '12' ? ` Good Morning`:  `${day}` > '12'?  `Good Afternoon` :`${day}` > '16' ? `Good Evening` : ''} {session?.user.name}</p>
      <Container>
        <div>
          <h1>Invoices</h1>
          <span>
            {screenSize > 600 ? "There are 7 total invoices" : "7 invoices"}
          </span>
        </div>

        <div className="filter">
          <FilterComponent />
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
  const { screenSize } = useScreenSize();

  return (
    <ButtonComponent icon={addInvoiceIcon} showIcon onClick={onClick}>
      {screenSize > 600 ? "New Invoice" : "New"}
    </ButtonComponent>
  );
};
