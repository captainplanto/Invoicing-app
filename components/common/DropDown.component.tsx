import { Dropdown, Radio } from "@nextui-org/react";
import { useState } from "react";
import { Image } from "@nextui-org/react";
import { filterButton, menuItems } from "../../constant/const";

const DropdownComponent = () => {
  const [checked, setChecked] = useState<string>("");

  return (
    <>
      <Dropdown closeOnSelect={false}>
        <Dropdown.Trigger>
          <Image src={filterButton} width={20} alt="filter-button" />
        </Dropdown.Trigger>
        <Dropdown.Menu
          aria-label="Dynamic Actions"
          css={{
            maxWidth: "40%",
          }}
        >
          {menuItems && menuItems.length > 0 ? (
            menuItems.map(({ key, name }) => (
              <Dropdown.Item key={key} aria-label="dropdown_item">
                <Radio.Group
                  value={checked}
                  onChange={() => setChecked(name)}
                  aria-label="drop_down_select"
                >
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
    </>
  );
};

export default DropdownComponent;
