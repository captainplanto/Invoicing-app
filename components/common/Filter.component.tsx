import styled from "styled-components";
import { Image } from "@nextui-org/react";
import { filterButton } from "../../constant/const";
import { DropdownComponent } from "./DropDown.component";
import { useEffect, useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
export const FilterComponent = () => {
  const { screenSize } = useScreenSize();
  return (
    <Container>
      <h3>{screenSize > 600 ? "Filter by status" : "Filter"}</h3>
      <DropdownComponent
        icon={<Image src={filterButton} width={20} alt="filter-button" />}
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
