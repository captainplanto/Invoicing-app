import { IMenu } from "../type/type";

export const logo =
  "https://res.cloudinary.com/captainkoder/image/upload/v1670369055/invoicing/logo_k9ugfb.svg";
export const lightMode =
  "https://res.cloudinary.com/captainkoder/image/upload/v1670369055/invoicing/icon-sun_uttggf.svg";
export const darkMode ="https://res.cloudinary.com/captainkoder/image/upload/v1670369054/invoicing/icon-moon_ebr9zx.svg";
export const filterButton ="https://res.cloudinary.com/captainkoder/image/upload/v1670369033/invoicing/icon-arrow-down_hfymag.svg";
export const addInvoiceIcon ="https://res.cloudinary.com/captainkoder/image/upload/v1670369055/invoicing/icon-plus_kej93z.svg";
export const noInvoice ="https://res.cloudinary.com/captainkoder/image/upload/v1670369055/invoicing/illustration-empty_yu36z9.svg";
export const rightArrow ="https://res.cloudinary.com/captainkoder/image/upload/v1670369053/invoicing/icon-arrow-right_cv0vif.svg";
  export const deleteIcon ="https://res.cloudinary.com/captainkoder/image/upload/v1670369054/invoicing/icon-delete_fbmee3.svg";

export const menuItems: IMenu[] = [
  { key: "draft", name: "Draft" },
  { key: "pending", name: "Pending" },
  { key: "paid", name: "Paid" },
];

export const days: string[] = [
  "Net 1 Day",
  "Net 7Days",
  "Net 14 Days",
  "Net 30 Days",
];

  export const columns = [
    {
      key: "name",
      label: "Item Name",
    },
    {
      key: "quantity",
      label: "Qty",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "total",
      label: "Total",
    },
    {
      key: "icon",
      label: "",
    },
  ];