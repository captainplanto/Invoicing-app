import { useReactiveVar } from "@apollo/client";
import { useTheme as useNextTheme } from "@nextui-org/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { invoiceVar } from "../../apollo/client/Config";
import { STATUS } from "../../constant/enum";

export const SnackBarComponent = () => {
  const { theme } = useNextTheme();
  const { showSnackBar, snackbarMessage } = useReactiveVar(invoiceVar);
  const [opacity, setOpacity] = useState<number>(1);
  useEffect(() => {
    const removeErrorTimer = setTimeout(() => {
      if (showSnackBar === false) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    }, 5000);
    return () => clearTimeout(removeErrorTimer);
  }, [showSnackBar]);

  if (snackbarMessage.length === 0) {
    return null;
  }
  return (
    <>
      <Typography theme={theme} opacity={opacity}>
        {snackbarMessage === STATUS.DELETE
          ? STATUS.DELETED_MESSAGE
          : snackbarMessage === STATUS.PAID
          ? STATUS.PAID_MESSAGE
          : snackbarMessage === STATUS.EDIT && STATUS.EDITED_MESSAGE}
      </Typography>
    </>
  );
};

const Typography = styled.div<{ opacity: number; theme: string }>`
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
  opacity: ${(props) => props.opacity};
  color: ${(props) => props.theme.colors.text?.value};
  background: ${(props) => props.theme.colors.cardItemBg?.value};
  transition: background 2s;
  @media screen and (max-width: 820px) {
    width: 25%;
  }
  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;
