import styled from "styled-components";
import { noInvoice, rightArrow } from "../../constant/const";
import { Image } from "@nextui-org/react";
import { FC } from "react";
import { IDBInvoices } from "../../type/type";
import { StatusComponent } from "./Status.component";
import { numberWithCommas } from "../../utils/utils";
import Link from "next/link";

export const InvoiceCardComponent: FC<IDBInvoices> = ({ invoices }) => {
  return (
    <Container>
      <ul>
        {invoices && invoices.length > 0 ? (
          invoices.map(
            ({ id, paymentDue, createdAt, clientName, total, status }) => (
              <>
                <Link
                  href={`/invoice/details/${clientName}/${id}`}
                  key={id.toString()}
                >
                  <div className="items desktop_view">
                    <li>
                      #<span>{id.toString()}</span>
                    </li>
                    <li>{`Due ${new Date(paymentDue)
                      .toUTCString()
                      .slice(5, 16)}`}</li>
                    <li> {clientName}</li>
                    <li> {`£${numberWithCommas(total)}`}</li>
                    <StatusComponent>{status}</StatusComponent>
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
                <div key={id.toString()} className="items mobile_view">
                  <li>
                    #<span>{id.toString()}</span>
                  </li>
                  <li style={{ textAlign: "center" }}> {clientName}</li>
                  <div className="mobile_div">
                    <li>{`Due ${new Date(paymentDue)
                      .toUTCString()
                      .slice(5, 16)}`}</li>
                    <li> {`£${numberWithCommas(total)}`}</li>
                  </div>
                  <StatusComponent>{status}</StatusComponent>
                </div>
              </>
            )
          )
        ) : (
          <div className="error_no_invoice">
            <Image
              src={noInvoice}
              className="invoice"
              alt="invoice-illustration"
              width="70%"
            />
            <div>
              <p>There is nothing here</p>
              <p>
                Create and invoice by clicking the new button to get started
              </p>
            </div>
          </div>
        )}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  ul {
    font-size: 1.4rem;
    .items {
      display: grid;
      align-items: center;
      padding: 2rem;
      grid-template-columns: 0.9fr 1.2fr 1.2fr 1fr 0.8fr 0.5fr;
      background: var(--main-white);
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
        color: black;
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
      color: var(--main-grey);
      font-weight: 400;
    }
    li:nth-child(4) {
      color: var(--main-black);
      font-size: 1.5rem;
      font-weight: 700;
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
          color: var(--main-grey);
          font-weight: 400 !important;
        }
        li:nth-child(2) {
          color: var(--main-black);
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
      }
    }
  }
`;
