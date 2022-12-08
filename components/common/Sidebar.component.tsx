import styled from "styled-components";
import { Divider, Image } from "@nextui-org/react";
import { logo } from "../../constant/const";
import { AvatarComponent } from "./Avatar.component";
import { ToggleComponent } from "./Toggle.component";

export const SideBarComponent = () => {
  return (
    <Container>
      <div className="logo_icon">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          objectFit="contain"
        />
      </div>

      <div className="divider_avatar">
        <ToggleComponent />
        <Divider style={divider} className="divider" />
        <div className="avatar">
          <AvatarComponent />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: var(--light-dark-blue);
  border-top-right-radius: 1.7rem;
  border-bottom-right-radius: 1.7rem;
  .logo_icon {
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 2rem;
    background: var(--main-blue);
    padding: 2.6rem;
  }
  .divider_avatar {
    .divider {
      margin-top: 3.5rem;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    .avatar {
      margin: 3.5rem 0 3.5rem 0;
    }
    @media screen and (max-width: 820px) {
      width: 30%;
      flex-direction: row;
      justify-content: space-around;
      .avatar,
      .divider {
        margin: 0;
      }
      .divider {
        height: 100%;
        width: 1px;
      }
    }
  }
  @media screen and (max-width: 820px) {
    flex-direction: row;
    height: auto;
    border-radius: 0;
  }
`;
const divider = {
  backgroundColor: "var(--divider-bg)",
};
