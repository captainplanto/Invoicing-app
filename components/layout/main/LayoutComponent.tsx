import { FC, ReactNode } from "react";
import styled from "styled-components";
interface ILayout {
  children: ReactNode;
}
export const LayOutComponent:FC<ILayout> = ({children}) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`

`;
