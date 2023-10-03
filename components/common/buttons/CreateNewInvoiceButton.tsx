import styled from "styled-components";
import { ButtonComponent } from "../Button.component";
import { addInvoiceIcon } from "../../../constant/const";

export const CreateNewInvoiceButton = ({
  onClick,
}: {
  onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
}) => {
  return (
    <Container>
      <ButtonComponent icon={addInvoiceIcon} showIcon onClick={onClick}>
        <div className="desktop_view">New Invoice</div>
        <div className="mobile_view">New</div>
      </ButtonComponent>
    </Container>
  );
};
const Container = styled.div`
  .desktop_view {
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .mobile_view {
    @media screen and (min-width: 601px) {
      display: none;
    }
  }
`;
