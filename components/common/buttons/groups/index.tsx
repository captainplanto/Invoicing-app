import { FC } from "react";
import { ButtonComponent } from "../../Button.component";
import {
  ISendProps,
  SaveAndSendButtonComponent,
} from "../SaveAndSendButtonComponent";
import styled from "styled-components";
import { useTheme as useNextTheme } from "@nextui-org/react";

export const ButtonGroup: FC<ISendProps> = ({ form, formik }) => {
  const { theme } = useNextTheme();
  return (
    <ButtonContainer theme={theme}>
      <div className="draft_send_btn">
        <div className="btn_btn">
          <ButtonComponent
            showIcon={false}
            className="discard_btn"
            type="button"
          >
            Discard
          </ButtonComponent>
        </div>

        <div className="btn_btn_two">
          <ButtonComponent showIcon={false} type="button">
            Save as Draft
          </ButtonComponent>
          <SaveAndSendButtonComponent form={form} formik={formik} />
        </div>
      </div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  .draft_send_btn {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    .btn_btn {
      .discard_btn {
        background: ${(props) => props.theme.colors.discard_btn?.value};
        p {
          color: var(--main-grey);
        }
      }
    }
    .btn_btn_two {
      display: flex;
      gap: 1rem;
      button:nth-child(1) {
        background: var(--save-draft-btn);
        p {
          color: var(--main-grey);
        }
      }
    }

    @media screen and (max-width: 500px) {
      justify-content: space-between;
      margin-top: 3rem;
      div:nth-child(2) {
        display: flex;
        gap: 0;
        button:nth-child(1) {
          margin: 0 2rem;
          background: var(--save-draft-btn);
          p {
            color: var(--main-grey);
          }
        }
      }
    }
  }
`;
