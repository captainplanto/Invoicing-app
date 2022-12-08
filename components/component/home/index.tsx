import styled from "styled-components";
import { HeaderComponent } from "../../common/Header.component";

export const Index = () => {
  return (
    <Container>
      <HeaderComponent />
      <main>
        <h1>Home here</h1>
      </main>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 8rem;
  main {
    margin-top: 8rem;
    background: green;
  }
  @media screen and (max-width: 820px) {
    width: 90%;
  }
`;
