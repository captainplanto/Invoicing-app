import { gql } from "apollo-server";
import { ObjectId } from "mongoose/node_modules/mongodb";
import dbConnect from "../../db/config/dbConnects";
import InvoiceModel from "../../db/models/Invoice.model";
import UserModel from "../../db/models/User.model";
import { IInvoiceForm } from "../../type/type";

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
      try {
        const users = await UserModel.find({});
        if (users) {
          console.log(users, "all users");
          return users;
        } else {
          console.log("no users");
        }
      } catch (error) {
        console.log(error, "cannot connect error");
      }
    },

    userInvoices: async (_: any, { _id }: { _id: string }, context: any) => {
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
    },

    invoiceDetail: async (_: any, { _id }: { _id: string }) => {
      try {
        const invoiceDetail = await InvoiceModel.findOne({
          _id: new ObjectId(_id),
        });
        if (invoiceDetail) {
          console.log(invoiceDetail, "invoice details");
          return invoiceDetail;
        } else {
          console.log("no invoice details yet");
          return [];
        }
      } catch (error) {
        console.log(error, "cannot get invoice details");
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
            console.log(response, "response here");
          if (response) {
          
            return response;
          }
        } catch (error) {
          return error;
        }
      } else {
        console.log("Please log in to create an invoice");
      }
    },
    deleteInvoice: async (_: any, { _id }: { _id: string }, context: any) => {
      try {
        const deleteInvoice = await InvoiceModel.findByIdAndDelete({
          _id: new ObjectId(_id),
        });
        if (deleteInvoice) {
          const newInvoice = await InvoiceModel.find({
            author: context.session.id,
          });
          return newInvoice;
        } else {
          return {
            status: "unsuccessful",
            message: "Invoice not found, please try again later",
          };
        }
      } catch (error) {
        return error;
      }
    },
    markInvoiceAsPaid: async (
      _: any,
      { _id, invoiceState }: { _id: string; invoiceState: string },
      context: any
    ) => {
      try {
        const markAsPaid = await InvoiceModel.findByIdAndUpdate(
          {
            _id: new ObjectId(_id),
            //   status: "paid",
          },
          {
            $set: {
              invoiceState: invoiceState,
            },
          }
        );
        console.log(markAsPaid, "paid status");
        if (markAsPaid) {
          return markAsPaid;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
