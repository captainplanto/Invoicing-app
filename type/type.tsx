import { Schema } from "mongoose";
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
  className?: string;
  background?: string;
}

export interface IAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
export interface IItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
export interface IInvoiceCard {
  id: string | Schema.Types.ObjectId;
  paymentDue: Date;
  createdAt: string;
  clientName: string;
  description: string;
  paymentTerms: number;
  total: number;
  status: string;
  senderAddress: IAddress;
  clientAddress: IAddress;
  items: IItem[];
}

export interface IDBInvoices {
  invoices: IInvoiceCard[];
}