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

export interface IButton {
  children: ReactNode;
  showIcon: boolean;
  icon?: string | any;
  link?: string;
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
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

export interface IItems {
  title: string;
  quantity: number;
  price: number;
  total: number;
}

export interface IInvoiceForm {
  _id: Schema.Types.ObjectId;
  userAddress: string;
  userCountry: string;
  userRegion: string;
  userPostCode: number;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  status: string;
  clientCountry: string;
  clientRegion: string;
  clientPostCode: number;
  invoiceDate: Date | ReactNode;
  paymentPlan: string;
  description: string;
  items: IItems[];
  author: IUser;
}

export interface IDetailsCardInvoice {
  invoice: IInvoiceForm;
}
