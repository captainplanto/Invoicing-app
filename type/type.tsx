import { ReactNode } from "react";

export interface IUser {
  name: string;
}

export interface IMenu {
  key: string;
  name: string;
}
export interface IIcon {
  icon: string | ReactNode;
}

export interface IButton {
  children: ReactNode;
  showIcon: boolean;
  icon?: string;
  link?: string;
  onClick?: () => void;
  style?: object;
  className?:string;
  background?:string;
}
