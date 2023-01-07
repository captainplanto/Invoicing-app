import mongoose, { Schema } from "mongoose";
import { IInvoiceForm } from "../../type/type";

const InvoiceSchema = new mongoose.Schema<IInvoiceForm>(
  {
    userCountry: { type: String },
    userAddress: { type: String },
    userRegion: { type: String },
    userPostCode: { type: Number },
    clientName: { type: String },
    clientEmail: { type: String },
    clientAddress: { type: String },
    status: { type: String },
    clientCountry: { type: String },
    clientRegion: { type: String },
    clientPostCode: { type: Number },
    invoiceDate: { type: String },
    paymentPlan: { type: String },
    description: { type: String },
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
