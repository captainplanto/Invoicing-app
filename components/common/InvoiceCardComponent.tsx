import styled from "styled-components";
import { noInvoice, rightArrow } from "../../constant/const";
import { Image } from "@nextui-org/react";
import { FC } from "react";
import { IUserInvoiceProps } from "../../type/type";
import { StatusComponent } from "./Status.component";
import Link from "next/link";
import { numberWithCommas } from "../../utils/utils";
import { useTheme } from "next-themes";

export const InvoiceCardComponent: FC<IUserInvoiceProps> = ({
  userInvoices,
}) => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <ul>
        {userInvoices && userInvoices.length > 0 ? (
          userInvoices.map(
            (
              {
                _id,
                createdAt,
                clientAddress,
                invoiceState,
                items,
              },
              index
            ) => (
              <div key={index}>
                <Link href={`/invoice/details/${clientAddress.name}/${_id}`}>
                  <div className="items desktop_view" key={_id.toString()}>
                    <li>
                      #<span>{_id.toString().slice(18, 24).toUpperCase()}</span>
                    </li>

                    <li>{`Due ${new Date(createdAt).toLocaleString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}`}</li>

                    <li> {clientAddress.name}</li>
                    <li> € {numberWithCommas(items.subTotal)}</li>

                    <StatusComponent>{invoiceState}</StatusComponent>
                    <div className="arrow_icon">
                      <Image
                        src={rightArrow}
                        width={7}
                        objectFit="contain"
                        alt="right-arrow-icon"
                      />
                    </div>
                  </div>
                </Link>

                <Link href={`/invoice/details/${clientAddress.name}/${_id}`}>
                  <div className="items mobile_view" key={_id.toString()}>
                    <li>
                      #<span>{_id.toString().slice(18, 24).toUpperCase()}</span>
                    </li>
                    <li style={{ textAlign: "center" }}> {clientAddress.name}</li>
                    <div className="mobile_div">
                      <li>{`Due ${new Date(createdAt).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}`}</li>
                      <li> € {numberWithCommas(items.subTotal)}</li>
                    </div>
                    <StatusComponent>{invoiceState}</StatusComponent>
                  </div>
                </Link>
              </div>
            )
          )
        ) : (
          <div className="error_no_invoice">
            <Image
              src={noInvoice}
              className="invoice"
              alt="invoice-illustration"
            />
            <div>
              <p>There is nothing here</p>
              <p>
                Create an invoice by clicking the new invoice button to get
                started.
              </p>
            </div>
          </div>
        )}
      </ul>
    </Container>
  );
};

const Container = styled.div<{ theme: string }>`
  ul {
    font-size: 1.4rem;
    .items {
      display: grid;
      align-items: center;
      padding: 2rem;
      grid-template-columns: 0.9fr 1.2fr 1.2fr 1fr 0.8fr 0.5fr;
      background: ${(props) =>
        props.theme === "dark"
          ? "var(--light-dark-blue)"
          : "var(--main-white)"};

      margin-top: 2rem;
      border-radius: 8px;
      -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
      box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
      &:hover {
        outline: 1px solid var(--main-blue);
      }
      cursor: pointer;
      span {
        font-weight: 700;

        color: ${(props) =>
          props.theme === "dark" ? "var(--main-white)" : "var(--main-black)"};
      }

      @media screen and (max-width: 500px) {
        .arrow_icon {
          img {
            display: none !important;
          }
        }
      }
    }

    li:nth-child(1) {
      color: var(--main-grey);
      font-weight: 700;
    }
    li:nth-child(2),
    li:nth-child(3) {
      color: ${(props) =>
        props.theme === "dark" ? "var(--main-white)" : "var(--main-grey)"};

      font-weight: 400;
    }
    li:nth-child(4) {
      color: ${(props) =>
        props.theme === "dark" ? "var(--main-white)" : " var(--main-black)"};
      font-size: 1.5rem;
      font-weight: 600;
    }

    .desktop_view {
      @media screen and (max-width: 500px) {
        display: none !important;
      }
    }

    .mobile_view {
      display: grid;
      grid-template-columns: 2fr 1.5fr;
      div {
        li:nth-child(1) {
          color: ${(props) =>
            props.theme === "dark" ? "var(--main-white)" : "var(--main-grey)"};
          font-weight: 400 !important;
        }
        li:nth-child(2) {
          color: ${(props) =>
            props.theme === "dark" ? "var(--main-white)" : "var(--main-grey)"};
          font-size: 1.7rem;
          font-weight: 700;
        }
      }
      @media screen and (min-width: 501px) {
        display: none;
      }
    }
    .error_no_invoice {
      div {
        width: 80%;
        margin: 0 auto;
        margin-top: 1rem;
        text-align: center;
        p:nth-child(1) {
          font-size: 2rem;
          font-weight: 800;
        }

        .nextui-c-kbhVdb {
          margin: 0 auto;
          width: 50%;
        }
      }
    }
  }
`;
