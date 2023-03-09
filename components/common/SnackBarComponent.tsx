import { useReactiveVar } from "@apollo/client";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { invoiceVar } from "../../apollo/client/Config";

export const SnackBarComponent = () => {
  const { theme } = useTheme();
  const { errorStatus, invoiceStatus } = useReactiveVar(invoiceVar);
  const [opacity, setOpacity] = useState<number>(0);
  useEffect(() => {
    const removeErrorTimer = setTimeout(() => {
      if (errorStatus === false) {
        setOpacity(0);
     }
    }, 2000);
    console.log(errorStatus, "errorstats");
    return () => clearTimeout(removeErrorTimer);
  }, [errorStatus]);

  return (
    <>
      {errorStatus === false && (
        <Typography theme={theme} opacity={opacity}>
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

const Typography = styled.div<{ opacity: number }>`
  display: grid;
  width: 15%;
  margin: 0 auto;
  margin-top: 0.5rem;
  border-radius: 2rem;
  padding: 0.5rem;
  place-content: center;
  font-weight: 500;
  font-size: 1, 2rem;
  white-space: nowrap;
  opacity: ${(props) => (props.opacity === 1 ? "1" : "0")};
  color: ${(props) =>
    props.theme === "dark" ? "var(--main-white)" : "var(--main-black)"};
  background: ${(props) =>
    props.theme === "dark" ? "var(--light-dark-blue)" : "var(--main-white)"};
  transition: background 2s;
  @media screen and (max-width: 820px) {
    width: 25%;
  }
  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;
