import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Country from "./Country";
import "../Components/InnerPage.css"

const InnerPage = () => {
  const params = useParams();

  const List = useSelector((state) => state.myreducer?.lists);
  //   const test = List.filter(item => item == params.id);

  //   console.log(test);

  return (
    <div>
      {List.filter((item) => item.name.common == params.id).map((items) => {
        return (
          <div className="country_info">
            <Country
              countryName={items.name.common}
              population={items.population}
              region={items.region}
              capital={items.capital}
              flagUrl={items.flags.svg}
            />
            <div className="main_info">
                <h1> {items.name.common} </h1>
                <p> <span>Native name: </span> {items.name.nativeName.spa.official} </p>
                <p> <span>Regions: </span> {items.region} </p>
                <p> <span>Timezones: </span> {items.timezones} </p>
                <p> <span>Currencies: </span> {items.currencies.UYU.name} </p>
                <p> <span>Languages: </span> {items.languages.spa} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InnerPage;
