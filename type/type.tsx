import { Schema } from "mongoose";
import { ReactNode } from "react";

export interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  image: string;
  invoices: IInvoiceForm[];
}

export interface IMenu {
  key: string;
  name: string;
}
export interface IIcon {
  icon: string | ReactNode;
}

export interface IButtonProps {
  _id?: Schema.Types.ObjectId;
  children: ReactNode;
  showIcon: boolean;
  icon?: string | any;
  link?: string;
  onClick?: (event: any) => void;
  style?: object;
  className?: string;
  background?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface IAddress {
  street: string;
  city: string;
  email?: string;
  postCode: number;
  country: string;
  name?: string;
}
export interface IItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
  subTotal: number;
}
export interface IUserInvoiceProps {
  userInvoices: IInvoiceCard[];
}
export interface IInvoiceCard {
  _id: Schema.Types.ObjectId;
  paymentDue: Date;
  createdAt: string;
  updatedAt: string;
  clientName: string;
  description: string;
  paymentTerms: number;
  invoiceState: string;
  userAddress: IAddress;
  clientAddress: IAddress;
  items: IINewtems;
}

export interface IDBInvoices {
  invoices: IInvoiceCard[];
}

export interface IItems {
  _id: Schema.Types.ObjectId;
  name: string;
  quantity: number;
  price: number;
  total: number;
}
export interface IINewtems {
  newItem: IItems[];
  subTotal: number;
}

export interface IInvoiceForm {
  // _id: Schema.Types.ObjectId | undefined;
  userAddress: IAddress;
  clientAddress: IAddress;
  invoiceState: string;
  createdAt: string;
  invoiceDate: Date | ReactNode;
  paymentPlan: string;
  description: string;
  items: IINewtems;
  author: string | Schema.Types.ObjectId;
}

export interface IDetailsCardInvoice {
  invoice: IInvoiceForm | undefined;
}

export interface IButtonLogicProps {
  _id: Schema.Types.ObjectId;
}
export const enum STATUS_NAME {
  PENDING = "pending",
  PAID = "paid",
  DRAFT = "draft",
}
