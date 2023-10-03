import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const HeaderTimeComponent = () => {
  const { data: session, status } = useSession();

  return (
    <div style={greetings}>
      {session && session.user?.name ? `Welcome, ${session.user?.name}` : "Welcome back"}
    </div>
  );
};

const greetings = {
  fontSize: "1.3rem",
  fontWeight: "700",
};
