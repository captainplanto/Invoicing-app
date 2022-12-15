import styled from "styled-components";
import { ButtonComponent } from "../Button.component";

export const EditBtn = ({ className }: { className: string }) => {
  return (
    <Containers>
      {className === "desktop_buttons" ? (
        <div className={`${className} action_btn`}>
          <ButtonComponent showIcon={false}>Edit</ButtonComponent>
          <ButtonComponent showIcon={false}>Delete</ButtonComponent>
          <ButtonComponent showIcon={false}>Mark as Paid</ButtonComponent>
        </div>
      ) : (
        <div className={`${className} action_btn`}>
          <ButtonComponent showIcon={false}>Edit</ButtonComponent>
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
