import mongoose, { Schema } from "mongoose";
import { IInvoiceForm } from "../../type/type";

const InvoiceSchema = new mongoose.Schema<IInvoiceForm>(
  {
    userAddress: { type: String },
    userCountry: { type: String },
    userRegion: { type: String },
    userPostCode: { type: Number },
    clientName: { type: String },
    clientEmail: { type: String },
    clientAddress: { type: String },
    status: { type: String },
    clientCountry: { type: String },
    clientRegion: { type: String },
    clientPostCode: { type: Number },
    invoiceDate: { type: Number },
    paymentPlan: { type: String },
    description: { type: String },
    items: { type: Array },
  },

  { timestamps: true }
);
InvoiceSchema.plugin(require("mongoose-autopopulate"));
export default mongoose.models.Invoice ||
  mongoose.model<IInvoiceForm>("Invoice", InvoiceSchema);


