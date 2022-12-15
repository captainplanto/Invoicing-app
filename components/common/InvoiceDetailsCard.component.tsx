import { FC } from "react";
import styled from "styled-components";
import { IDetailsCardInvoice } from "../../type/type";
import { ButtonComponent } from "./Button.component";
import { StatusComponent } from "./Status.component";

export const InvoiceDetailsCardComponent: FC<IDetailsCardInvoice> = ({
  invoice,
}) => {
  const {
    status,
    id,
    description,
    userAddress,
    userRegion,
    userPostCode,
    userCountry,
    invoiceDate,
    clientAddress,
    clientCountry,
    clientEmail,
    clientName,
    clientPostCode,
    clientRegion,
  } = invoice;

  return (
    <Container>
      <h3>Go back</h3>
      <div className="invoice_action_btn">
        <div>
          Status
          <StatusComponent>{status}</StatusComponent>
        </div>

        <div className="action_btn">
          <ButtonComponent showIcon={false}>Edit</ButtonComponent>
          <ButtonComponent showIcon={false}>Delete</ButtonComponent>
          <ButtonComponent showIcon={false}>Mark as Paid</ButtonComponent>
        </div>
      </div>

      <div className="card">
        <div className="id_client_address">
          <div>
            <p>
              <span>#</span>
              {id}
            </p>
            <p>{description}</p>
          </div>
          <div>
            <ul>
              <li>{userAddress}</li>
              <li>{userRegion}</li>
              <li>{userPostCode}</li>
              <li>{userCountry}</li>
              <p>{clientName}</p>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
 width: 50%;
 margin: 0 auto;
 margin-top:8rem;
  h3 {
    margin-bottom: 3rem;
  }
  .invoice_action_btn {
      display:flex;
      justify-content:space-between;
        background: var(--main-white);
        border-radius: 8px;
      padding:1rem;
    -webkit-box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1004);
    margin-bottom: 1rem;


  .action_btn {  
      display:flex;
      justify-content:space-between;
      gap:2rem!important;
    button::nth-child(1) {
      background: var(--light-bg);
      p {
        color: var(--light-blue-bg);
      }

      ::hover{
          color:var((--light-blue-bg);
          background:var(--main-grey);
      }

    }
    
    button::nth-child(2) {
      background: var(--main-red);
      ::hover {
        background: var(--light-red);
      }
    }

    }






  .card{
      padding:4rem;
       background: var(--main-white);
       .id_client_address{
           display:flex;
           justify-content:space-between;
           margin-bottom:3rem;
       }
  }
`;
