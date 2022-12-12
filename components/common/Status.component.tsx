import { FC, ReactNode } from "react";
import styled from "styled-components";

interface IStatus {
  children: string | ReactNode;
  style?: object;
}
const statusColorCode = (children: string | ReactNode) =>
  children === "paid" ? "paid" : children === "pending" ? "pending" : "draft";

export const StatusComponent: FC<IStatus> = ({ children, style }) => {
  return (
    <Container>
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
    background: var(--status-paid-bg);
    color: var(--status-paid);
    span {
      color: var(--status-paid) !important;
    }
  }
  .pending {
    background: var(--status-pending-bg);
    color: var(--status-pending);
    span {
      color: var(--status-pending) !important;
    }
  }
  .draft {
    background: var(--status-draft-bg);
    color: var(--status-draft);
    span {
      color: var(--status-draft) !important;
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
