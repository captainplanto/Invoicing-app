import { FC } from "react";
import styled from "styled-components";
import { ButtonComponent } from "./Button.component";
import { ModalComponent } from "./Modal.component";

interface IConfirm {
  title: string;
  description?: string;
  id: string;
}

export const ConfirmationComponent: FC<IConfirm> = ({
  title,
  description,
  id,
}) => {
  return (
    <ModalComponent>
      <Container>
        <div className="content">
          <h1>{`Confirm ${title}`}</h1>
          <p>
            {`${title}` === `Delete`
              ? `Are you sure you want to ${title} this invoice ${id}? This action cannot be undone.`
              : `Are you sure you want to ${title} this invoice ${id}?`}
          </p>
          <div className="buttons">
            <ButtonComponent showIcon={false} className="cancel_button">
              Cancel
            </ButtonComponent>
            <ButtonComponent showIcon={false} className="delete_button">
              {title}
            </ButtonComponent>
          </div>
        </div>
      </Container>
    </ModalComponent>
  );
};
const Container = styled.div`
  .content {
 padding:1.5rem;
    .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 2rem;
      margin-top:2rem;
    }
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.4rem;
      color: var(--main-grey);
    }
    .cancel_button {
      background: var(--light-bg);
    }

    .delete_button {
      background: var(--main-red);
      &:hover {
        background: var(--light-red);
      }
      p {
        color: var(--main-white);
      }
    }
  }
`;
