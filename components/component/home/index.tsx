import { FC } from "react";
import styled from "styled-components";
import { IDBInvoices } from "../../../type/type";
import { HeaderComponent } from "../../common/Header.component";
import { InvoiceCardComponent } from "../../common/InvoiceCardComponent";

export const Index: FC<IDBInvoices> = ({ invoices }) => {
  return (
    <Container>
      <HeaderComponent />
      <main>
        <InvoiceCardComponent invoices={invoices} />
      </main>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 8rem;
  main {
    margin-top: 8rem;
  }
  @media screen and (max-width: 820px) {
    width: 90%;
  }
`;

/*
import { useQuery } from "@apollo/client";
import {
  DATA_ALL_INVOICE_BY_USER,
  GET_ALL_INVOICE_BY_USER,
} from "../../../apollo/client/queries";
import { print } from "graphql/language/printer";
import { useSession } from "next-auth/react";
import { client } from "../../../apollo/client/Config";

  const session = useSession();
  const { data, loading, error } = useQuery(GET_ALL_INVOICE_BY_USER);
  const { data: myData } = useQuery(DATA_ALL_INVOICE_BY_USER, {
    onCompleted: (myData) => myData,
  });

  useEffect(() => {
    const getData = async () => {
      const request = await fetch("/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: print(GET_ALL_INVOICE_BY_USER),
          variables: {
            _id: session.data?.id,
          },
        }),
      });
      const response = await request.json();
      client.writeQuery({
        query: DATA_ALL_INVOICE_BY_USER,
        data: {
          invoices: response.data.userInvoices,
        },
      });
      console.log(myData, response.data.userInvoices);
    };
    getData();
  }, []);
















*/
