import styled from "styled-components";
import { addInvoiceIcon } from "../../constant/const";
import { useScreenSize } from "../../hooks/useScreenSize";
import { ButtonComponent } from "./Button.component";
import { FilterComponent } from "./Filter.component";

export const HeaderComponent = () => {
  const { screenSize } = useScreenSize();
  return (
    <>
      <Container>
        <div>
          <h1>Invoices</h1>
          <span>
            {screenSize > 600 ? "There are 7 total invoices" : "7 invoices"}
          </span>
        </div>
        <div className="filter">
          <FilterComponent />
          <ButtonComponent icon={addInvoiceIcon} showIcon>
            {screenSize > 600 ? "New Invoice" : "New"}
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
        line-height: 0;
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
