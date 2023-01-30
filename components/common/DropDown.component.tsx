import { Dropdown, Radio } from "@nextui-org/react";
import { FC, useState } from "react";

import { menuItems } from "../../constant/const";
import { IIcon } from "../../type/type";

export const DropdownComponent: FC<IIcon> = ({ icon }) => {
  const [checked, setChecked] = useState<string>("");

  return (
    <Dropdown closeOnSelect={true}>
      <Dropdown.Trigger>{icon}</Dropdown.Trigger>
      <Dropdown.Menu
        aria-label="Dynamic Actions"
        css={{
          maxWidth: "40%",
        }}
      >
        {menuItems && menuItems.length > 0 ? (
          menuItems.map(({ key, name }) => (
            <Dropdown.Item key={key}>
              <Radio.Group value={checked} onChange={() => setChecked(name)}>
                <Radio value={name} isSquared>
                  {name}
                </Radio>
              </Radio.Group>
            </Dropdown.Item>
          ))
        ) : (
          <h6>No item to render</h6>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
