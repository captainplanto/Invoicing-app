import { Avatar, Tooltip } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";

export const AvatarComponent = () => {
  const { data: session, status } = useSession();
  const { windowDimensions } = useScreenSize();

  if (session && session.user.image) {
    return (
      <Tooltips
        trigger={windowDimensions.width > 820 ? "hover" : "click"}
        content={<LogoutUser signout={() => signOut()} />}
        placement={
          windowDimensions && windowDimensions.width > 820
            ? "rightStart"
            : "bottomEnd"
        }
        leaveDelay={1000}
      >
        <Avatar
          src={session.user.image}
          size="lg"
          alt="avatar"
          className="avatar_hover"
        />
      </Tooltips>
    );
  }
  return <Avatar src="aa" size="lg" alt="avatar" />;
};
const Tooltips = styled(Tooltip)`
  .avatar_hover {
    cursor: pointer;
  }
`;

export const LogoutUser = ({ signout }: { signout: () => void }) => {
  const { windowDimensions } = useScreenSize();

  return (
    <Typography
      style={
        windowDimensions && windowDimensions.width > 820 ? desktop : mobile
      }
      onClick={signout}
    >
      Logout
    </Typography>
  );
};
const Typography = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;
const desktop = {
  marginLeft: "1rem",
};
const mobile = {
  marginLeft: 0,
};
