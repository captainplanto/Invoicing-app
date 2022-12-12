import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const findWidth = window.innerWidth;
    setScreenSize(findWidth);
  }, []);

  return { screenSize } as const;
};
