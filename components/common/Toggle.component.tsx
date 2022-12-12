import { useState } from "react";
import { darkMode, lightMode } from "../../constant/const";
import { Image } from "@nextui-org/react";
import styled from "styled-components";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { light } from "@mui/material/styles/createPalette";
export const ToggleComponent = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { setTheme } = useNextTheme();
  //const { isDark, type } = useTheme();
  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      setTheme("dark");
    } else {
     setTheme("light");
    }
  };
  return (
    <Div onClick={handleToggle}>
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
