import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import styled from "styled-components";
import { CreateNewInvoiceButton } from "./Header.component";
import { EditInvoiceButton } from "./buttons/DetailPageButton.component";
import { CreateInvoiceComponent } from "../component/invoice/New.component";
type Anchor = "top" | "left" | "bottom" | "right";

export const DrawerComponent = ({ LeftDrawer }: { LeftDrawer: boolean }) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <Container>
      {LeftDrawer
        ? (["left"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <CreateNewInvoiceButton onClick={toggleDrawer(anchor, true)} />
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                style={swipeStyle}
              >
                <CreateInvoiceComponent title="New Invoice" />
              </SwipeableDrawer>
            </React.Fragment>
          ))
        : (["right"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <EditInvoiceButton onClick={toggleDrawer(anchor, true)} />
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                style={swipeStyle}
              >
                <CreateInvoiceComponent
                  title="Edit Invoice"
                  className="invoice"
                />
              </SwipeableDrawer>
            </React.Fragment>
          ))}
    </Container>
  );
};
const Container = styled.div`
  .invoice {
    padding: 1rem;
    @media screen and (max-width: 1500px) {
      padding: 1rem;
      background: red;
    }
  }
`;
const swipeStyle = {
  zIndex: "0",
};
