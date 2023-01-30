import { Schema } from "mongoose";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { idToString } from "../../utils/utils";
import { ButtonComponent } from "./Button.component";
import { ModalComponent } from "./Modal.component";

interface IConfirmProps {
  title: string;
  description?: string;
  id: Schema.Types.ObjectId;
  deleteButton: ReactNode;
  deleteButtonLogic: ReactNode;
  // onClick: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
}

export const ConfirmationButtonComponent: FC<IConfirmProps> = ({
  title,
  deleteButton,
  deleteButtonLogic,
  id,
}) => {
  return (
    <ModalComponent button={deleteButton}>
      <Container>
        <div className="content">
          {title === "delete" ? (
            <h1>Confirm deletion</h1>
          ) : (
            <h1>Confirm editing</h1>
          )}
          <p>
            {`${title}` === `delete`
              ? `Are you sure you want to ${title} this invoice #${idToString(
                  id
                )}? This action cannot be undone.`
              : `Are you sure you want to ${title} this invoice #${idToString(
                  id
                )}?`}
          </p>
          <div className="buttons">
            <ButtonComponent showIcon={false} className="cancel_button">
              Cancel
            </ButtonComponent>
            {deleteButtonLogic}
          </div>
        </div>
      </Container>
    </ModalComponent>
  );
};

const Container = styled.div`
  .content {
    text-align: center;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.4rem;

      color: var(--main-grey);
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 5rem;
      margin-top: 2rem;

      .cancel_button {
        padding: 0 2rem;
        background: var(--light-bg);
      }

      .delete_button {
        padding: 1rem 2rem;
        background: var(--main-red);
        &:hover {
          background: var(--light-red);
        }
        p {
          color: var(--main-white);
        }
      }
    }
  }
`;
