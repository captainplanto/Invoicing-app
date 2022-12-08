import { useState } from "react";
import { darkMode, lightMode } from "../../constant/const";
import { Image } from "@nextui-org/react";
import styled from "styled-components";

export const ToggleComponent = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
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



const Div =styled.div`
&:hover{
    cursor:pointer;
}
`