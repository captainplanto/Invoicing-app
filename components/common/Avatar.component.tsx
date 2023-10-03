import { Avatar, Tooltip } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import styled from "styled-components";
import { LogoutUser } from "./LogOutUser";
import { useMediaQuery } from "@mui/material";

export const AvatarComponent = () => {
  const { data: session, status } = useSession();
  const matches = useMediaQuery("(max-width:820px)");
  return (
    <Tooltips
      trigger="click"
      content={<LogoutUser signout={() => signOut()} />}
      placement={matches ? "bottom" : "rightStart"}
      // leaveDelay={1000}
    >
      {session && session?.user?.image ? (
        <Avatar
          src={session?.user?.image}
          size="lg"
          alt="avatar"
          className="avatar_hover"
        />
      ) : (
        <Avatar src="" size="lg" alt="avatar" />
      )}
    </Tooltips>
  );
};

const Tooltips = styled(Tooltip)`
  .avatar_hover {
    cursor: pointer;
  }
`;
