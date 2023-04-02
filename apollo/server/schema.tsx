import { gql } from "apollo-server";
import { Error } from "mongoose";
import { ObjectId } from "mongoose/node_modules/mongodb";
import dbConnect from "../../db/config/dbConnects";
import InvoiceModel from "../../db/models/Invoice.model";
import UserModel from "../../db/models/User.model";
import { IInvoiceForm } from "../../type/type";
import { validationSchema } from "../../utils/utils";

export const typeDefs = gql`
  scalar Date
  type Users {
    _id: ID
    name: String
    email: String
    image: String
  }
  input ItemArray {
    _id: ID
    name: String
    quantity: String
    price: String
    total: Int
  }
  input IAddress {
    city: String
    country: String
    postCode: Int
    name: String
    email: String
    street: String
  }

  type Address {
    city: String
    country: String
    postCode: Int
    name: String
    email: String
    street: String
  }
  input InputItems {
    newItem: [ItemArray]
    subTotal: Int
  }

  type ItemArrays {
    _id: ID
    name: String
    quantity: Int
    price: Int
    total: Int
  }

  type Items {
    newItem: [ItemArrays]
    subTotal: Int
  }

  type Invoice {
    _id: ID
    userAddress: Address
    clientAddress: Address
    invoiceState: String
    invoiceDate: String
    paymentPlan: String
    description: String
    items: Items
    author: String
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    users: [Users]
    userInvoices(_id: String): [Invoice]
    invoiceDetail(_id: String): Invoice
  }

  input CreateInvoiceInput {
    _id: ID
    userAddress: IAddress
    clientAddress: IAddress
    invoiceDate: String
    paymentPlan: String
    description: String
    items: InputItems
    author: String
    invoiceState: String
  }
  type Mutation {
    createInvoice(createNewInvoice: CreateInvoiceInput): Invoice!
    deleteInvoice(_id: String): Invoice
    markInvoiceAsPaid(_id: String, invoiceState: String): Invoice
  }
`;
dbConnect();

export const resolvers = {
  Query: {
    users: async (
      parent: any,
      args: { name: any },
      context: any,
      info: any
    ) => {
      if (context.session) {
        try {
          const users = await UserModel.find({});
          if (users) {
            return users;
          } else {
            console.log("no users");
          }
        } catch (error) {}
      } else {
        throw new Error("Please log in to perform this action");
      }
    },

    userInvoices: async (_: any, { _id }: { _id: string }, context: any) => {
      if (context.session) {
        try {
          const allInvoicesByUser = await InvoiceModel.find({
            author: new ObjectId(_id),
          });
          if (allInvoicesByUser) {
            return allInvoicesByUser;
          } else {
            return [];
          }
        } catch (error: any) {
          return `${error.message}`;
        }
      } else {
        throw new Error("Please log in to perform this action");
      }
    },

    invoiceDetail: async (_: any, { _id }: { _id: string }, context: any) => {
      if (context.session) {
        try {
          const invoiceDetail = await InvoiceModel.findOne({
            _id: new ObjectId(_id),
          });
          if (invoiceDetail) {
            return invoiceDetail;
          } else {
            return [];
          }
        } catch (error) {
          console.log(error, "cannot get invoice details");
        }
      } else {
        throw new Error("Please log in to perform this action");
      }
    },
  },

  Mutation: {
    createInvoice: async (
      _: any,
      {
        createNewInvoice: {
          userAddress,
          clientAddress,
          invoiceState,
          invoiceDate,
          paymentPlan,
          description,
          items,
          author,
        },
      }: { createNewInvoice: IInvoiceForm },
      context: any,
      info: any
    ) => {
      if (context.session) {
        try {
          const validateInvoiceInput = await validationSchema.validate({
            userAddress,
            clientAddress,
            invoiceState,
            invoiceDate,
            paymentPlan,
            description,
            items,
            author,
          });
          if (validateInvoiceInput) {
            const newInvoice = await new InvoiceModel({
              userAddress: {
                street: userAddress.street,
                country: userAddress.country,
                postCode: userAddress.postCode,
                city: userAddress.city,
              },
              clientAddress: {
                street: clientAddress.street,
                country: clientAddress.country,
                postCode: clientAddress.postCode,
                city: clientAddress.city,
                name: clientAddress.name,
                email: clientAddress.email,
              },
              invoiceState: invoiceState,
              invoiceDate: invoiceDate,
              paymentPlan: paymentPlan,
              description: description,
              items: items,
              author: context.session.id,
            });
            const response = await newInvoice.save();
            if (response) {
              return {
                data: response,
                status: 200,
                success: true,
              };
            }
          }
        } catch (error) {
          console.log(error, "error in schema");
        }
      } else {
        console.log("Please log in to create an invoice");
      }
    },
    deleteInvoice: async (_: any, { _id }: { _id: string }, context: any) => {
      if (!context.session) {
        throw new Error("You are not authorized to perform this action.");
      }
      try {
        const deletedInvoice = await InvoiceModel.findByIdAndDelete({
          _id: new ObjectId(_id),
          author: context.session.id,
        });

        if (!deletedInvoice) {
          return {
            success: false,
            message: "Invoice not found.",
          };
        }

        const newInvoices = await InvoiceModel.find({
          author: context.session.id,
        });

        return {
          success: true,
          message: "Invoice deleted successfully.",
          invoices: newInvoices,
        };
      } catch (error: any) {
        return {
          success: false,
          message: "An error occurred while deleting the invoice.",
          error: error?.message,
        };
      }
    },
    markInvoiceAsPaid: async (
      _: any,
      { _id, invoiceState }: { _id: string; invoiceState: string },
      context: any
    ) => {
      if (context.session) {
        try {
          const markAsPaid = await InvoiceModel.findByIdAndUpdate(_id, {
            $set: {
              invoiceState: invoiceState,
            },
          });

          if (markAsPaid) {
            return markAsPaid;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        throw new Error("Please log in to perform this action");
      }
    },
  },
};
