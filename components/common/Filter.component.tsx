import styled from "styled-components";
import { Image } from "@nextui-org/react";
import { filterButton } from "../../constant/const";
import { DropdownComponent } from "./DropDown.component";
import { useEffect, useState } from "react";
export const FilterComponent = () => {
  const [size, setSize] = useState<number>(0);
  useEffect(() => {
    const findWidth = window.innerWidth;
    setSize(findWidth);
  }, []);
  return (
    <Container>
      <h3>{size > 600 ? "Filter by status" : "Filter"}</h3>
      <DropdownComponent
        icon={<Image src={filterButton}  width={20} alt="filter-button" />}
      />
    </Container>
  );
};

const Container = styled.div`

  display: flex;
  gap: 1rem;
  img {
    &:hover {
      cursor: pointer;
    }
  }
 
`;
