import React from "react";
import { Card } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  const url = `/country/${props?.countryName}`;

  // const handleClick = (name) => {
  //   <Routes>
  //     <Route exact path={url} />
  //   </Routes>;
  // };

  return (
    <Card
      style={{ width: "18rem", border: "1px solid #eaedf0", marginTop: "20px" }}
    >
      <Link to={url}>
        <Card.Img
          variant="top"
          src={props.flagUrl}
          style={{
            height: "10rem",
            width: "18rem",
          }}
          // onClick={() => handleClick(props.countryName)}
        />
      </Link>
      <Card.Body
        style={{
          marginLeft: "20px",
        }}
      >
        <Card.Title
          style={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {" "}
          {props.countryName}{" "}
        </Card.Title>
        <Card.Text>
          <span>Population: </span> {props.population}
        </Card.Text>
        <Card.Text>
          <span>Region: </span> {props.region}
        </Card.Text>
        <Card.Text>
          <span>Captial: </span> {props.capital}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Country;
