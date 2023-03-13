import styled from "styled-components";
import { Table } from "@nextui-org/react";
import { createInvoiceColumns, deleteIcon } from "../../constant/const";
import { Image } from "@nextui-org/react";
import { ChangeEvent, FC, useState } from "react";
import { TextField } from "@mui/material";
import { ButtonComponent } from "./Button.component";
import { IItems } from "../../type/type";
import { isAllowed } from "../../utils/utils";
import { NumericFormat } from "react-number-format";
import {
  ISendProps,
  SaveAndSendButtonComponent,
} from "./buttons/SaveAndSendButtonComponent";
import { useReactiveVar } from "@apollo/client";
import { invoiceVar } from "../../apollo/client/Config";
import { invoiceMutation } from "../../apollo/client/local/mutation";
import { useTheme as useNextTheme } from "@nextui-org/react";

interface ITotalValue {
  newItem: IItems[];
  subTotal: number;
}
export const ListItemComponent: FC<ISendProps> = ({ form, formik }) => {
  const [newItem, setNewItem] = useState<any[]>([]);
  const { itemEntryLists } = useReactiveVar(invoiceVar);
  const { theme } = useNextTheme();
  const handleCreateNewItemClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    invoiceMutation("itemEntryLists", true), event.preventDefault();
    setNewItem([...newItem, { name: "", quantity: 0, price: 0, total: 0 }]);
  };

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const eachItem = [...newItem];
    eachItem[index][name] = value;
    setNewItem(eachItem);
    const total = eachItem.reduce((acc, item) => {
      return item.price * item.quantity;
    }, 0);
    eachItem[index].total = total;

    const subTotal = newItem
      .map((item: { total: number }) => item.total)
      .reduce((prev: number, next: number) => {
        return prev + next;
      }, 0);

    const totalValue: ITotalValue = { newItem, subTotal };
    localStorage.setItem("totalPackage", JSON.stringify(totalValue));
  };

  const removeItemAdded = (index: number) => {
    const ItemAdded = [...newItem];
    ItemAdded.splice(index, 1);
    setNewItem(ItemAdded);
  };

  return (
    <Container theme={theme}>
      <h3>Item List</h3>
      {itemEntryLists ? (
        <Table
          aria-label="Example table with dynamic content"
          css={{
            height: "auto",
            // maxWidth: "100%",
          }}
          className="table"
          color="error"
        >
          <Table.Header columns={createInvoiceColumns}>
            {(column) => (
              <Table.Column
                key={column.key}
                css={{
                  background: "transparent",
                  color: "var(--light-blue-bg)",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {column.label}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body>
            {newItem.map((item: IItems, index: number) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <TextField
                    type="text"
                    onChange={(e) => handleChange(e, index)}
                    value={item.name}
                    name="name"
                    style={{ width: "18rem" }}
                  />
                </Table.Cell>

                <Table.Cell>
                  <NumericFormat
                    type="text"
                    value={item.quantity}
                    thousandSeparator=","
                    name="quantity"
                    thousandsGroupStyle="thousand"
                    valueIsNumericString={true}
                    onChange={(e) => handleChange(e, index)}
                    displayType="input"
                    style={{ width: "5rem" }}
                    allowNegative={false}
                    allowLeadingZeros={false}
                    decimalScale={0}
                    customInput={TextField}
                    isAllowed={(values) => isAllowed(values, "quantity")}
                  />
                </Table.Cell>

                <Table.Cell>
                  <NumericFormat
                    type="text"
                    value={item.price}
                    //thousandSeparator=","
                    name="price"
                    // thousandsGroupStyle="thousand"
                    valueIsNumericString={true}
                    onChange={(e) => handleChange(e, index)}
                    displayType="input"
                    style={{ width: "8rem" }}
                    allowNegative={false}
                    allowLeadingZeros={false}
                    decimalScale={2}
                    customInput={TextField}
                    isAllowed={(values) => isAllowed(values, "price")}
                  />
                </Table.Cell>

                <Table.Cell>
                  <NumericFormat
                    // type="text"
                    value={item.quantity * item.price}
                    thousandSeparator=","
                    thousandsGroupStyle="thousand"
                    displayType="text"
                    allowNegative={false}
                    renderText={(value) => <b>{value}</b>}
                    valueIsNumericString={true}
                    style={{ width: "8rem" }}
                  />
                </Table.Cell>

                <Table.Cell>
                  <Image
                    src={deleteIcon}
                    alt="icon-delete"
                    objectFit="contain"
                    width="1rem"
                    height="1rem"
                    onClick={() => removeItemAdded(index)}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        ""
      )}
      <div className="button_items">
        <ButtonComponent
          showIcon={false}
          onClick={handleCreateNewItemClick}
          type="button"
        >
          &#43; Add New Item
        </ButtonComponent>
      </div>

      <div className="draft_send_btn">
        <div className="btn_btn">
          <ButtonComponent showIcon={false} className="discard_btn" type="button">
            Discard
          </ButtonComponent>
        </div>

        <div className="btn_btn_two">
          <ButtonComponent showIcon={false} type="button">
            Save as Draft
          </ButtonComponent>
          <SaveAndSendButtonComponent
            form={form}
            formik={formik}
            type="submit"
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ theme: string }>`
  margin-top: 2rem;
  h3 {
    color: var(--main-grey);
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }
  img {
    cursor: pointer;
  }

  .button_items {
    margin-top: 1rem;
    button {
      display: grid;
      place-items: center;
      width: 100%;
      background: var(--save-draft-btn);
      p {
        color: var(--main-white);
      }
    }
  }

  .draft_send_btn {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    .btn_btn {
      .discard_btn {
        background: ${(props) => props.theme.colors.discard_btn.value};
        p {
          color: var(--main-grey);
        }
      }
    }
    .btn_btn_two {
      display: flex;
      gap: 1rem;
      button:nth-child(1) {
        background: var(--save-draft-btn);
        p {
          color: var(--main-grey);
        }
      }
    }

    @media screen and (max-width: 500px) {
      justify-content: space-between;
      margin-top: 3rem;
      div:nth-child(2) {
        display: flex;
        gap: 0;
        button:nth-child(1) {
          margin: 0 2rem;
          background: var(--save-draft-btn);
          p {
            color: var(--main-grey);
          }
        }
      }
    }
  }
  .nextui-c-hWZRae {
    border-radius: 0 !important;
    background: trasparent !important;
  }
  .nextui-c-hWZRae-gikTHb-shadow-true {
    box-shadow: none;
  }
  .nextui-c-gNVTSf-icCJVMZ-css {
    margin-top: 0 !important;
  }
`;
