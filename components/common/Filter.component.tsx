import styled from "styled-components";
import { Image } from "@nextui-org/react";
import { filterButton } from "../../constant/const";
import { DropdownComponent } from "./DropDown.component";
export const FilterComponent = ({
  desktop_view,
  mobile_view,
}: {
  desktop_view: string;
  mobile_view: string;
}) => {
  return (
    <Container>
      <h3 className={desktop_view}>Filter by status</h3>
      <h3 className={mobile_view}>Filter</h3>
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
