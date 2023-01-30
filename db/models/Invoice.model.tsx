import mongoose, { Schema } from "mongoose";
import { IInvoiceForm } from "../../type/type";

const InvoiceSchema = new mongoose.Schema<IInvoiceForm>(
  {
    userAddress: {
      street: { type: String },
      country: { type: String },
      region: { type: String },
      postCode: { type: Number },
    },
    clientAddress: {
      name: { type: String },
      street: { type: String },
      country: { type: String },
      region: { type: String },
      postCode: { type: Number },
      email: { type: String },
    },
    invoiceDate: { type: String },
    paymentPlan: { type: String },
    description: { type: String },
    invoiceState: { type: String },
    items: {
      newItem: [
        {
          name: { type: String },
          quantity: { type: Number },
          price: { type: Number },
          total: { type: Number },
        },
      ],
      subTotal: { type: Number },
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);
InvoiceSchema.plugin(require("mongoose-autopopulate"));
export default mongoose.models.Invoice ||
  mongoose.model<IInvoiceForm>("Invoice", InvoiceSchema);
