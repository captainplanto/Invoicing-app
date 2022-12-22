import mongoose, { Schema } from "mongoose";
import { IUser } from "../../type/type";

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String },
    email: { type: String },
    image: { type: String },
    invoices: [
      {
        type: Schema.Types.ObjectId,
        ref: "Invoice",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
