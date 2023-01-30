import { FC, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
interface IStatus {
  children: string | ReactNode;
  style?: object;
}
const statusColorCode = (children: string | ReactNode) =>
  children === "paid" ? "paid" : children === "Pending" ? "pending" : "draft";

export const StatusComponent: FC<IStatus> = ({ children, style }) => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <div className={statusColorCode(children)}>
        <p>
          <span>&#9679;</span>
          {children}
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  .paid,
  .pending,
  .draft {
    font-weight: 600;
    padding: 8px 0;
    border-radius: 6px;
    font-size: 1.4rem;
    text-transform: capitalize;
  }
  .paid {
    background: var(--paid-dark-mode);
    color: var(--status-paid);
    span {
      color: var(--status-paid) !important;
    }
  }
  .pending {
    background: var(--pending-dark-mode);
    color: var(--status-pending);
    span {
      color: var(--status-pending) !important;
    }
  }
  .draft {
    background: ${(props) =>
      props.theme === "dark" ? "var(--draft-dark-mode)" : "var(--light-bg)"};
    color: ${(props) =>
      props.theme === "dark"
        ? "var(--status-draft-btn)"
        : "var(--draft-dark-mode)"};
    span {
      color: var(--status-draft-btn) !important;
    }
  }
  div {
    p {
      span {
        margin-right: 4px;
      }
    }
  }
`;
