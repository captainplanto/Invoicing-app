import styled from "styled-components";
import { github, google } from "../../../constant/const";
import { ButtonComponent } from "../../common/Button.component";
import { signIn } from "next-auth/react";

export const RegisterComponent = ({ providers }: { providers: any }) => {
  return (
    <Containers>
      {providers ? (
        Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <ButtonComponent
              showIcon
              icon={
                provider.name === "Google"
                  ? google
                  : provider.name === "GitHub"
                  ? github
                  : ""
              }
              onClick={() => signIn(provider.id)}
            >
              {`Register/Sign in with ${provider.name}`}
            </ButtonComponent>
          </div>
        ))
      ) : (
        <ButtonComponent showIcon onClick={() => signIn("github")}>
          Sign up with Github
        </ButtonComponent>
      )}
    </Containers>
  );
};

const Containers = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  align-items: center;
  div:nth-child(1) {
    button {
      background: var(--main-black);
      p {
        color: var(--main-white);
      }
    }
  }
  div:nth-child(2) {
    button {
      border: 1px solid var(--light-grey);
      margin: 1rem 0;
      background: var(--main-white);
      p {
        color: var(--main-black);
      }
    }
  }
  div:nth-child(1),
  div:nth-child(2) {
    .icon_bg {
      background: var(--light-grey);
    }
    p {
      padding: 0 5rem;
    }
  }
`;
