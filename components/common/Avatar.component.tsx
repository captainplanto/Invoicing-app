import { Avatar } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export const AvatarComponent = () => {
  const { data: session, status } = useSession();
  if (session && session.user.image) {
    return <Avatar src={session.user.image} size="lg"  alt="avatar"/>;
  } 
    return <Avatar src="aa" size="lg" alt="avatar" />;
  
};
