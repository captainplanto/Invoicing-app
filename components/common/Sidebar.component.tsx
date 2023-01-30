import styled from "styled-components";
import { Divider, Image } from "@nextui-org/react";
import { logo } from "../../constant/const";
import { AvatarComponent } from "./Avatar.component";
import { ToggleComponent } from "./Toggle.component";
import { useRouter } from "next/router";

export const SideBarComponent = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="container_small">
        <div className="logo_icon" onClick={() => router.push("/")}>
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
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--light-dark-blue);
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.7rem;
  z-index: 10000;
  position: sticky;
  top: 0;

  .container_small {
    position: sticky;
    top: 0;
    height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logo_icon {
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 2rem;
      background: var(--main-blue);
      padding: 2.6rem;
      cursor: pointer;
    }
    .divider_avatar {
      display: flex;
      align-items: center;
      flex-direction: column;
      .divider {
        margin-top: 3.5rem;
      }
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
  }
  @media screen and (max-width: 820px) {
    width: 100vw;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;
const divider = {
  backgroundColor: "var(--divider-bg)",
};
