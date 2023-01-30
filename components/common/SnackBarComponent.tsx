import { useReactiveVar } from "@apollo/client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { invoiceVar } from "../../apollo/client/Config";

export const SnackBarComponent = () => {
  const { theme } = useTheme();
  const { invoiceError, invoiceStatus } = useReactiveVar(invoiceVar);
  const [removeError, setRemoveError] = useState<boolean>(true);
  useEffect(() => {
    const removeErrorTimer = setTimeout(() => {
      setRemoveError(false);
    }, 3000);
    return () => clearTimeout(removeErrorTimer);
  }, []);

  return (
    <>
      {invoiceError === true && removeError && (
        <Typography theme={theme}>
          {invoiceStatus === "delete"
            ? "Invoice deleted succesfully"
            : invoiceStatus === "paid"
            ? "Invoice marked as Paid succesfully"
            : "Invoice successfully Edited"}
        </Typography>
      )}
    </>
  );
};

const Typography = styled.div`
  display: grid;
  width: 10%;
  margin: 0 auto;
  margin-top: 0.5rem;
  border-radius: 2rem;
  padding: 0.5rem;
  place-content: center;
  font-weight: 500;
  font-size: 1, 2rem;
  white-space: nowrap;

  color: ${(props) =>
    props.theme === "dark" ? "var(--main-white)" : "var(--main-black)"};
  background: ${(props) =>
    props.theme === "dark" ? "var(--light-dark-blue)" : "var(--main-white)"};
  transition: background 2s;
  @media screen and (max-width: 820px) {
    width: 20%;
  }
  @media screen and (max-width: 600px) {
    width: 40%;
  }
`;
