import { FC } from "react";
import styled from "styled-components";
import { useTheme as useNextTheme } from "@nextui-org/react";
import { statusColorCodeStyle } from "../../utils/utils";
interface IStatus {
  children: string;
}

export const StatusComponent: FC<IStatus> = ({ children }) => {
  const { theme } = useNextTheme();
  return (
    <Container theme={theme}>
      <div className={statusColorCodeStyle(children)}>
        <p>
          <span>&#9679;</span>
          {children}
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div<{ theme: string }>`
  text-align: center;
  .paid,
  .pending,
  .draft {
    font-weight: 600;
    padding: 8px 0;
    border-radius: 6px;
    text-transform: capitalize;
  }
  .paid {
    background: ${(props) => props.theme.colors.paid_bg.value};
    color: ${(props) => props.theme.colors.paid_text.value};
    span {
      color: ${(props) => props.theme.colors.paid_text.value}!important;
    }
  }
  .pending {
    background: ${(props) => props.theme.colors.pending_bg.value};
    color: ${(props) => props.theme.colors.pending_text.value};
    span {
      color: ${(props) => props.theme.colors.pending_text.value}!important;
    }
  }
  .draft {
    background: ${(props) => props.theme.colors.draft_bg.value};
    color: ${(props) => props.theme.colors.draft_color};
    span {
      color: ${(props) => props.theme.colors.draft_span}!important;
    }
  }
  div {
    p {
      font-size: 1.4rem;
      span {
        padding: 4px;
      }
    }
  }
`;
