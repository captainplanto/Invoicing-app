import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { days } from "../../constant/const";

export const PaymentSelectorComponent = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: any) => void;
}) => {
  const selectedValue = React.useMemo(
    () => Array.from(value).join(", ").replaceAll("_", " "),
    [value]
  );

  return (
    <div>
      <FormControl style={{ width:'100%'}}>
        <Select
          style={{ fontWeight: "800"}}
          value={value}
          name="paymentPlan"
          onChange={onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <h3 style={h3}>Payment Plan</h3>
          </MenuItem>
          {days.map((value) => (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

const h3 = {
  fontWeight: "800",
  color: "var(--main-black)",
};

/*
import { Grid, Dropdown, Radio } from "@nextui-org/react";

export default function App() {
  const [selectedColor, setSelectedColor] = React.useState("default");
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
   <Dropdown>
        <Dropdown.Button color="secondary" light>
          {selectedValue}
        </Dropdown.Button>
        <Dropdown.Menu
          color="default"
          variant="solid"
          aria-label="Actions"
          selectionMode="single"
          disallowEmptySelection
          selectedKeys={value}
           // onChange={onChange}
       onSelectionChange={onChange}
        >
          {days.map((value) => (
            <Dropdown.Item key={value} withDivider>
              {value}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>














*/
