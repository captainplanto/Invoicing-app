import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import styled from "styled-components";
import { CreateNewInvoiceButton } from "./Header.component";
import { EditInvoiceButton } from "./buttons/DetailPageButton.component";
import { CreateInvoiceComponent } from "../component/create/NewInvoice.component";
import { Schema } from "mongoose";
import { red } from "@nextui-org/react";
type Anchor = "top" | "left" | "bottom" | "right";

export const DrawerComponent = ({
  LeftDrawer,
  _id,
}: {
  LeftDrawer: boolean;
  _id: Schema.Types.ObjectId;
}) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (
      event:
        | React.KeyboardEvent
        | React.MouseEvent
        | React.KeyboardEvent
        | React.MouseEvent
    ) => {
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
            <SwipeBackround key={anchor}>
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
            </SwipeBackround>
          ))
        : (["right"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <EditInvoiceButton
                onClick={toggleDrawer(anchor, true)}
                _id={_id}
              />
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
const SwipeBackround = styled.div`
  .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
    background: red !important;
  }
`;
