import { ReactNode } from "react";
import styled from "styled-components";
import { SideBarComponent } from "../../common/Sidebar.component";
import { LayOutComponent } from "../../layout/main/LayoutComponent";

export const LayOutPage = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <SideBarComponent />
      <LayOutComponent>{children}</LayOutComponent>
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  display: grid;
  background-color: var(--light-bg);
  grid-template-columns: 8.5rem 11fr;
  @media screen and (max-width: 820px) {
    display: block;
  }
`;
// background-color: var(--light-bg);
//
