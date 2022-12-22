import styled from "styled-components";
import { ButtonComponent } from "../Button.component";
import { DrawerComponent } from "../Drawer.component";

export const DetailPageButtonComponent = ({
  className,
}: {
  className: string;
}) => {
  return (
    <Containers>
      {className === "desktop_buttons" ? (
        <div className={`${className} action_btn`}>
          <DrawerComponent LeftDrawer={false} />
          <ButtonComponent showIcon={false}>Delete</ButtonComponent>
          <ButtonComponent showIcon={false}>Mark as Paid</ButtonComponent>
        </div>
      ) : (
        <div className={`${className} action_btn`}>
          <DrawerComponent LeftDrawer={false} />
          <ButtonComponent showIcon={false}>Delete</ButtonComponent>
          <ButtonComponent showIcon={false}>Mark as Paid</ButtonComponent>
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

export const EditInvoiceButton = ({
  onClick,
}: {
  onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
}) => {
  return (
    <ButtonComponent showIcon={false} onClick={onClick}>
      Edit
    </ButtonComponent>
  );
};
