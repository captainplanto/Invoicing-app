import { Schema } from "mongoose";
import { useTheme } from "next-themes";
import styled from "styled-components";
import { ButtonComponent } from "../Button.component";
import { ConfirmationButtonComponent } from "../ConfirmationButton.component";
import { DrawerComponent } from "../Drawer.component";
import { InvoiceDeleteButtonComponent } from "./InvoiceDeleteButton.component";
import { InvoicePaidButtonComponent } from "./InvoicePaidButton.component";

export const DetailPageButtonComponent = ({
  className,
  _id,
}: {
  className: string;
  _id: Schema.Types.ObjectId;
}) => {
  const { theme } = useTheme();

  return (
    <>
      <Containers theme={theme}>
        {className === "desktop_buttons" ? (
          <div className={`${className} action_btn`}>
            <DrawerComponent LeftDrawer={false} _id={_id} />
            <div className="delete_button">
              <ConfirmationButtonComponent
                title="delete"
                id={_id}
                deleteButton={
                  <ButtonComponent
                    className="delete"
                    showIcon={false}
                    _id={_id}
                  >
                    Delete
                  </ButtonComponent>
                }
                deleteButtonLogic={<InvoiceDeleteButtonComponent _id={_id} />}
              />
            </div>

            <InvoicePaidButtonComponent _id={_id} />
          </div>
        ) : (
          <div className={`${className} action_btn`}>
            <DrawerComponent LeftDrawer={false} _id={_id} />
            <div className="delete_button">
              <ConfirmationButtonComponent
                title="delete"
                id={_id}
                deleteButton={
                  <ButtonComponent
                    className="delete"
                    showIcon={false}
                    _id={_id}
                  >
                    Delete
                  </ButtonComponent>
                }
                deleteButtonLogic={<InvoiceDeleteButtonComponent _id={_id} />}
              />
            </div>
            <InvoicePaidButtonComponent _id={_id} />
          </div>
        )}
      </Containers>
    </>
  );
};
const Containers = styled.div`
  .action_btn {
    button:nth-child(1) {
      background: ${(props) =>
        props.theme === "dark" ? "var(--light-dark-blue)" : "var(--light-bg)"};
      :hover {
        background: ${(props) =>
          props.theme === "dark" ? "var(--main-grey)" : "var(--light-grey)"};
      }
      p {
        color: ${(props) =>
          props.theme === "dark" ? "var(--main-white)" : "var(--main-grey)"};
        padding: 4px 1rem;
      }
    }
    .delete_button {
      .delete {
        background: var(--main-red);
        :hover {
          background: var(--light-red);
        }
        p {
          color: var(--main-white);
          padding: 4px 0.7rem;
        }
      }
    }
  }
`;

export const EditInvoiceButton = ({
  onClick,
  _id,
}: {
  onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
  _id?: Schema.Types.ObjectId;
}) => {
  return (
    <ButtonComponent showIcon={false} onClick={onClick} _id={_id}>
      Edit
    </ButtonComponent>
  );
};

/*

  | FormEvent<Element>
      | FormEventHandler<Element>

*/
