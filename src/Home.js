import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./Redux/actions/actions";
import { Form, FormControl, Button } from "react-bootstrap";
import "./Home.css";
import Countries from "./Components/Countries";

function Home() {

  const [data, setData] = useState("");

  const product = useSelector((state) => state.myreducer?.lists);
  const dispatch = useDispatch();

  useEffect(async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    dispatch(setProducts(data));
  }, []);

  const handleOnChange = (e) => {
    const newData = e.target.value;
    console.log(e);
    setData(newData)
  }

  return (
    <>
      <div className="header">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{
              padding: "10px",
            }}
            value={data}
            onChange={handleOnChange}
          />
        </Form>
      </div>
      <div className="main">
        <Countries name={data} />
      </div>
    </>
  );
}

export default Home;
