import { Typography } from "@mui/material";
import styled from "styled-components";
export const LogoutUser = ({ signout }: { signout: () => void }) => {
  return (
    <OuterDiv>
      <Typography onClick={signout} className="place_button">
        Logout
      </Typography>
    </OuterDiv>
  );
};
const OuterDiv = styled.div`
  cursor: pointer;
  @media screen and (min-width: 821px) {
    .place_button {
      margin-left: 2rem;
      font-size: 1.2rem;
      font-weight: 600;
      padding: 7px;
    }
  }
  @media screen and (max-width: 820px) {
    .place_button {
      font-size: 1rem;
      font-weight: 600;
      padding: 0 7px;
    }
  }
`;
