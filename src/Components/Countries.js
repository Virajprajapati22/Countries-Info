import { useSelector } from "react-redux";
import Country from "./Country";

import React from "react";

const Countries = (props) => {
  const Lists = useSelector((state) => state.myreducer.lists);
  console.log(props.data);
  return (
    <>
      {props.name === ""
        ? Lists.map((items, index) => (
            <Country
              countryName={items.name.common}
              population={items.population}
              region={items.region}
              capital={items.capital}
              flagUrl={items.flags.svg}
            />
          ))
        : Lists.filter((items) => items.name.common.startsWith(props.name)).map(
            (items, index) => (
              <Country
                countryName={items.name.common}
                population={items.population}
                region={items.region}
                capital={items.capital}
                flagUrl={items.flags.svg}
              />
            )
          )}
    </>
  );
};

export default Countries;
