import styled from "styled-components";
import { Index } from ".";
import { SideBarComponent } from "../../common/Sidebar.component";
import { LayOutComponent } from "../../layout/LayoutComponent";

export const HomeIndex = () => {
  return (
    <Container>
      <SideBarComponent />
      <LayOutComponent>
        <Index />
      </LayOutComponent>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 8.5rem 11fr;
  @media screen and (max-width: 820px) {
    display: block;
  }
`;
