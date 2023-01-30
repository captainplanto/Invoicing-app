import { useCallback, useState } from "react";
import { darkMode, lightMode } from "../../constant/const";
import { Image } from "@nextui-org/react";
import styled from "styled-components";
import { useTheme } from "next-themes";

export const ToggleComponent = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { setTheme } = useTheme();
  const changeTheme = useCallback(() => {
    setToggle(!toggle);
    if (toggle) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme, toggle]);

  return (
    <Div onClick={changeTheme}>
      <Image
        src={toggle ? lightMode : darkMode}
        alt={toggle ? "light-mode-icon" : "dark-mode-icon"}
      />
    </Div>
  );
};

const Div = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
