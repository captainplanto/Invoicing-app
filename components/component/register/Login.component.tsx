
import styled from "styled-components";
import { loginBgImage } from "../../../constant/const";
import { Image } from "@nextui-org/react";
import { MobileDesktopTextComponent } from "../../common/MobileDesktopText.component";
export const LoginComponent = () => {
  return (
    <Container>
      <div className="desktop_login">
        <MobileDesktopTextComponent />
      </div>
      <div className="mobile_login">
        <div className="image_bg">
          <Image
            src={loginBgImage}
            alt="login_bg_image"
            object-fit="contain"
            className="image"
          />
        </div>
        <div className="bg_text">
          <p> Easy Invoicing</p>
        </div>
        <div className="input_bg">
          <MobileDesktopTextComponent />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .mobile_login {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }
  .desktop_login {
    display: none;
    @media screen and (min-width: 501px) {
      display: block;
    }
  }

  .image_bg {
    .image {
      margin-top: 0;
      filter: blur(2.5px);
      -webkit-filter: blur(2.5px);
    }
  }
  .bg_text {
    position: absolute;
    top: 0;
    height: 100%;
    background: black;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 12;
    display: flex;
    padding: 10rem 0 0 2rem;
    p {
      color: var(--main-white);
      font-weight: 500;
      line-height: 5rem;
      font-size: 6rem;
      word-break: break-word;
      @media screen and (max-width: 280px) {
        font-size: 4rem;
      }
    }
    @media screen and (max-width: 370px) {
      padding: 3rem 0 0 2rem;
    }
  }

  .input_bg {
    position: absolute;
    bottom: 0;
    padding: 3rem;
    z-index: 12;
    background: var(--main-white);
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
`;

