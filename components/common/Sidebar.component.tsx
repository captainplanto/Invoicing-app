import styled from "styled-components";
import { Image } from "@nextui-org/react";
import { logo } from "../../constant/const";
import { AvatarComponent } from "./Avatar.component";
import { Divider } from "@mui/material";

// <Divider/>

export const SideBarComponent = () => {
  return (
    <>
      <Container>
        <div>
          <Image
            src={logo}
            alt="logo"
            width={80}
            height={80}
            objectFit="contain"
          />
        </div>

        <AvatarComponent />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: var(--light-dark-blue);
  border-top-right-radius: 1.7rem;
  border-bottom-right-radius: 1.7rem;
  div {
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 2rem;
    background: var(--main-blue);
    padding: 1.5rem;
    img {
    }
  }
`;
