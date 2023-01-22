import React from "react";
import styled from "styled-components";
import FiltersContainer from "./FiltersContainer";
import {
  Sparkle,
  Tag,
  Star,
  CurrencyDollarSimple,
  CaretDown,
} from "phosphor-react";

const FiltersDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Roboto", sans-serif;
`;

function Filters() {
  return (
    <FiltersDiv>
      <FiltersContainer icon={<Sparkle size={10} />} text="Trending" href="" />

      <FiltersContainer icon={<Tag size={10} />} text="Offers" href="" />

      <FiltersContainer
        icon={<Star size={10} />}
        text="Ratings"
        href=""
        icon2={<CaretDown size={10} />}
      />

      <FiltersContainer
        icon={<CurrencyDollarSimple size={10} />}
        text="Price"
        href=""
        icon2={<CaretDown size={10} />}
      />
    </FiltersDiv>
  );
}

export default Filters;
