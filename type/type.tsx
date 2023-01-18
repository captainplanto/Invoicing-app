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
  onClick?: (event:any) => void;
  style?: object;
  className?: string;
  background?: string;
  type?:string;
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
  subTotal: number;
}
export interface IUserInvoiceProps{
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
  status: string;
  senderAddress: IAddress;
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
  createdAt: string;
  clientRegion: string;
  clientPostCode: number;
  invoiceDate: Date | ReactNode;
  paymentPlan: string;
  description: string;
  items: IINewtems;
  author: string;
}

export interface IDetailsCardInvoice {
  invoice: IInvoiceForm;
}
