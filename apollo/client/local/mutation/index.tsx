import { IInvoiceProps, invoiceVar } from "../../Config";

export function invoiceMutation(updates: Partial<IInvoiceProps>): void;
export function invoiceMutation<K extends keyof IInvoiceProps>(
  key: K,
  value: IInvoiceProps[K]
): void;
export function invoiceMutation<K extends keyof IInvoiceProps>(
  arg1: K | Partial<IInvoiceProps>,
  arg2?: IInvoiceProps[K]
) {
  if (typeof arg1 === "string") {
    // single key-value pair
    const key = arg1;
    const value = arg2;
    const canvas: IInvoiceProps = invoiceVar();
    const updatedInvoice = { ...canvas, [key]: value };
    console.log(updatedInvoice);
    return invoiceVar(updatedInvoice);
  } else {
    // object of key-value pairs
    const updates = arg1;
    const invoice: IInvoiceProps = invoiceVar();
    const updatedInvoice = { ...invoice, ...updates };
    console.log(updatedInvoice);
    return invoiceVar(updatedInvoice);
  }
}
