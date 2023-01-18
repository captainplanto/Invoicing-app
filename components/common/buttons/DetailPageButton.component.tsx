import { useMutation} from "@apollo/client";
import { Schema } from "mongoose";
import { useRouter } from "next/router";
import { FormEvent, FormEventHandler } from "react";
import styled from "styled-components";
import { DELETE_INVOICE_MUTATION } from "../../../apollo/client/mutations";
import { ButtonComponent } from "../Button.component";
import { ConfirmationButtonComponent } from "../ConfirmationButton.component";
import { DrawerComponent } from "../Drawer.component";

export const DetailPageButtonComponent = ({
  className,
  _id,
}: {
  className: string;
  _id: Schema.Types.ObjectId;
}) => {
  const router = useRouter();

  const [deleteInvoice, { loading, data, error }] = useMutation(
    DELETE_INVOICE_MUTATION
  );
  const deleteInvoiceHandler = () => {
    deleteInvoice({
      variables: {
        id: _id,
      },
    });
  };
  if (data) {
    router.push("/");
  }
  if (loading) {
    return (
      <div>
        <h6>deleting....</h6>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h6>Error deleting invoice, please try again later ${error.message}</h6>
      </div>
    );
  }

  return (
    <Containers>
      {className === "desktop_buttons" ? (
        <div className={`${className} action_btn`}>
          <DrawerComponent LeftDrawer={false} _id={_id} />
          <div className="delete_button">
            <ConfirmationButtonComponent
              title="delete"
              id={_id}
              button={
                <ButtonComponent className="delete" showIcon={false} _id={_id}>
                  Delete
                </ButtonComponent>
              }
              onClick={() => deleteInvoiceHandler()}
            />
          </div>
          <ButtonComponent showIcon={false} _id={_id}>
            Mark as Paid
          </ButtonComponent>
        </div>
      ) : (
        <div className={`${className} action_btn`}>
          <DrawerComponent LeftDrawer={false} _id={_id} />
          <ButtonComponent showIcon={false} _id={_id}>
            Delete
          </ButtonComponent>
          <ButtonComponent showIcon={false} _id={_id}>
            Mark as Paid
          </ButtonComponent>
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
    .delete_button {
      .delete {
        background: var(--main-red);
        :hover {
          background: var(--light-red);
        }
        p {
          color: var(--main-white);
          padding: 4px 1rem;
        }
      }
    }
  }
`;

export const EditInvoiceButton = ({
  onClick,
  _id,
}: {
  onClick: (event: FormEvent<Element> | FormEventHandler<Element>) => void;
  _id: Schema.Types.ObjectId;
}) => {
  return (
    <ButtonComponent showIcon={false} onClick={onClick} _id={_id}>
      Edit
    </ButtonComponent>
  );
};
