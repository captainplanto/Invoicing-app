import { Schema } from "mongoose";
import { FormEvent, FormEventHandler } from "react";
import styled from "styled-components";
import { ButtonComponent } from "../Button.component";
import { DrawerComponent } from "../Drawer.component";

export const DetailPageButtonComponent = ({className, _id}: {className: string, _id: Schema.Types.ObjectId;}) => {
  return (
    <Containers>
      {className === "desktop_buttons" ? (
        <div className={`${className} action_btn`}>
          <DrawerComponent LeftDrawer={false} _id={_id}/>
          <ButtonComponent showIcon={false}  _id={_id}>Delete</ButtonComponent>
          <ButtonComponent showIcon={false}  _id={_id}>Mark as Paid</ButtonComponent>
        </div>
      ) : (
        <div className={`${className} action_btn`}>
          <DrawerComponent LeftDrawer={false} _id={_id}/>
          <ButtonComponent showIcon={false}  _id={_id}>Delete</ButtonComponent>
          <ButtonComponent showIcon={false} _id={_id}>Mark as Paid</ButtonComponent>
        </div>
      )}
    </Containers>
  );
};
const Containers = styled.div`
  .action_btn {
    button:nth-child(1) {
      background: var(--light-bg);
      :hover {
        background: var(--light-grey);
      }
      p {
        color: var(--light-blue-bg);
        padding: 0px 1rem;
      }
    }
    button:nth-child(2) {
      background: var(--main-red);
      :hover {
        background: var(--light-red);
      }
      p {
        padding: 4px 1rem;
      }
    }
  }
`;

export const EditInvoiceButton = ({onClick, _id}: {
  onClick: ( event: FormEvent<Element> | FormEventHandler<Element>) => void; _id:Schema.Types.ObjectId}) => {
  return (
    <ButtonComponent showIcon={false} onClick={onClick} _id={_id}>
      Edit
    </ButtonComponent>
  );
};
