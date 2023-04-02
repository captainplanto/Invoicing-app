import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { days } from "../../constant/const";
import { useTheme as useNextTheme } from "@nextui-org/react";
import styled from "styled-components";

export const PaymentSelectorComponent = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: any) => void;
}) => {
  const { theme } = useNextTheme();
  const selectedValue = React.useMemo(
    () => Array.from(value).join(", ").replaceAll("_", " "),
    [value]
  );

  return (
    <Container theme={theme}>
      <FormControl style={{ width: "100%" }}>
        <Select
          value={value}
          name="paymentPlan"
          onChange={onChange}
          displayEmpty
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  backgroundColor: theme?.colors.background?.value,
                },
              },
            },
          }}
        >
          <MenuItem value="">Payment Plan</MenuItem>
          {days.map((value) => (
            <MenuItem value={value} key={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};
const Container = styled.div<{ theme: string }>`
  & .MuiInputBase-root {
    font-family: ${(props) => props.theme.fonts.sans};
    font-weight: 800;
  }
  & .MuiSvgIcon-root {
    color: ${(props) => props.theme.colors.child_4?.value};
  }
`;
