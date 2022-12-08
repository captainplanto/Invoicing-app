import styled from "styled-components";
import { addInvoiceIcon } from "../../constant/const";
import { ButtonComponent } from "./buttons/Button.component";
import { FilterComponent } from "./Filter.component";

export const HeaderComponent = () => {
  return (
    <>
      <Container>
        <div>
          <h1>Invoices</h1>
          <span>There are 7 total invoices</span>
        </div>
        <div className="filter">
          <FilterComponent />
          <ButtonComponent icon={addInvoiceIcon} showIcon>
            New Invoice
          </ButtonComponent>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  .edit_button {
    background: grey;
    &:hover {
      background: red;
    }
  }
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 3rem;
  }
  span {
    color: var(--main-grey);
    font-size: 1.2rem;
  }
  .filter {
    display: flex;
    align-items: center;
    gap: 4rem;
    @media screen and (max-width: 500px) {
      gap: 1rem;
    }
  }
`;

