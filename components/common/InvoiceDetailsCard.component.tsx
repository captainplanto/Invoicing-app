import { Link, Table } from "@nextui-org/react";
import { FC, Key} from "react";
import styled from "styled-components";
import { DetailsInvoiceColumns, leftArrow } from "../../constant/const";
import { IDetailsCardInvoice, IItems } from "../../type/type";
import { DetailPageButtonComponent } from "./buttons/DetailPageButton.component";
import { StatusComponent } from "./Status.component";
import { Image } from "@nextui-org/react";
import { idToString, numberWithCommas } from "../../utils/utils";


export const InvoiceDetailsCardComponent: FC<IDetailsCardInvoice> = ({
  invoice,
}) => {
  const {
    status,
    _id,
    description,
    items,
    userAddress,
    userRegion,
    userPostCode,
    userCountry,
    createdAt,
    paymentPlan,
    clientAddress,
    clientCountry,
    clientEmail,
    clientName,
    clientPostCode,
    clientRegion,
  } = invoice;

  return (

    <Container>
      <Link href="/">
        <button className="go_back_btn">
          <Image src={leftArrow} alt="icon-left-arrow" />
          <h3>Go back</h3>
        </button>
      </Link>

      <div className="invoice_action_btn">
        <div className="mini_flex">
          <p className="status">Status</p>
          <StatusComponent>{status}</StatusComponent>
        </div>
        <DetailPageButtonComponent className="desktop_buttons" _id={_id} />
      </div>
      <div className="card">
        <div className="id_client_address">
          <div className="id">
            <p>
              #<span>{idToString(_id)}</span>
            </p>
            <p>{description}</p>
          </div>
          <div className="user_address">
            <ul>
              <li>{userAddress}</li>
              <li>{userRegion}</li>
              <li>{userPostCode}</li>
              <li>{userCountry}</li>
            </ul>
          </div>
        </div>

        <div className="bill_to_client_grid">
          <div className="grid_one">
            <p>
              Invoice Date
              <span>{`${new Date(createdAt).toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}`}</span>
            </p>
            <p>
              Payment Due <span>{paymentPlan}</span>
            </p>
          </div>

          <div className="grid_two">
            <div>
              <p> Bill To</p>
              <p>{clientName}</p>
              <span>
                <ul>
                  <li>{clientAddress}</li>
                  <li>{clientRegion}</li>
                  <li>{clientPostCode}</li>
                  <li>{clientCountry}</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="grid_three">
            <p>
              Sent to <span>{clientEmail}</span>
            </p>
          </div>
        </div>

        <div>
          <Table
            aria-label="Example table with dynamic content"
            css={{
              height: "auto",
              // maxWidth: "100%",
            }}
          >
            <Table.Header columns={DetailsInvoiceColumns}>
              {(column) => (
                <Table.Column
                  key={column.key}
                  css={{
                    background: "transparent",
                    color: "var(--light-blue-bg)",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  {column.label}
                </Table.Column>
              )}
            </Table.Header>
            <Table.Body>
              {items?.newItem.map(
                ({ name, quantity, total, price }: IItems, index: Key | null | undefined) => (
                  <Table.Row key={index}>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{quantity}</Table.Cell>
                    <Table.Cell>{price}</Table.Cell>
                    <Table.Cell>{total}</Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table>
          <div className="total_amount">
            <h6>Amount</h6>
            <h2>€ {numberWithCommas(items?.subTotal)}</h2>
          </div>

          <div>
            <DetailPageButtonComponent className="mobile_buttons" _id={_id} />
          </div>
        </div>
      </div>
    </Container>
      
  );
};

const Container = styled.div`
  .go_back_btn {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    gap: 1rem;
    cursor: pointer;
    h3 {
      margin-bottom: 0;
      color: var(--main-black);
      font-family: var(--main-font);
    }
  }
  td {
    z-index: 0;
    :nth-child(1),
    :nth-child(4) {
      font-weight: 700;
    }
    :nth-child(2),
    :nth-child(3) {
      color: var(--main-text-color);
      font-weight: 600;
    }
  }
  width: 40%;
  margin: 0 auto;
  margin-top: 4rem;
  @media screen and (max-width: 1500px) {
    width: 60%;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  h3 {
    margin-bottom: 3rem;
  }

  .invoice_action_btn,
  .mobile_buttons {
    display: flex;
    justify-content: space-between;
    background: var(--main-white);
    border-radius: 8px;
    padding: 1rem;
    -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
    margin-top: 2rem;
    margin-bottom: 2rem;
    .mini_flex {
      display: flex;
      align-items: center;
      gap: 2rem;
      .status {
        color: var(--main-grey);
        font-weight: 500;
      }
      div:nth-child(1) {
        padding: 5px 2.5rem;
      }
    }

    @media screen and (max-width: 600px) {
      .desktop_buttons {
        display: none;
      }
      .mini_flex {
        display: grid;
        grid-template-columns: 6fr 1fr;
      }
    }
    @media screen and (min-width: 821px) {
      .desktop_buttons {
        display: flex;
        gap: 1rem;
      }
    }
  }
  .card {
    font-size: 1.2rem;
    padding: 2rem;
    background: var(--main-white);
    -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
    border-radius: 8px;
    .id_client_address {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .id {
        p:nth-child(1) {
          span {
            font-weight: normal;
            color: var(--main-text-color);
          }

          font-weight: 800;
        }
        p:nth-child(2) {
          color: var(--main-text-color);
        }
      }
      .user_address {
        text-align: right;
        color: var(--main-text-color);
      }
      @media screen and (max-width: 500px) {
        display: block;
        .user_address {
          text-align: left;
          margin-top: 0.5rem;
        }
      }
    }

    .bill_to_client_grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      .grid_one {
        p:nth-child(1),
        P:nth-child(2) {
          color: var(--main-text-color);
          span {
            display: block;
            font-weight: 800;
            color: var(--main-black);
          }
        }
        p:nth-child(2) {
          margin-top: 1rem;
        }
      }
      .grid_two {
        p:nth-child(2) {
          font-weight: 800;
        }
        p:nth-child(1),
        span {
          color: var(--main-text-color);
        }
      }
      .grid_three {
        p {
          color: var(--main-text-color);
        }
        span {
          display: block;
          font-weight: 800;
          color: var(--main-black);
        }
      }

      @media screen and (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }
    .total_amount {
      display: grid;
      grid-template-columns: 3fr 1fr;
      background: var(--light-dark-blue);
      color: var(--main-white);
      align-items: center;
      padding: 2rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      h6 {
        font-size: 1rem;
      }
      h2 {
        font-size: 2rem;
        white-space: nowrap;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .mobile_buttons {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    .mobile_buttons {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      margin-top: 4rem;
      .jOPnMO .icon_child {
        display: grid;
      }
      @media screen and (max-width: 350px) {
        grid-template-columns: 1fr;
      }
    }
  }
  .nextui-c-hWZRae {
    border-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
    background: var(--light-bg) !important;
    margin-top: 2rem;
  }
`;
