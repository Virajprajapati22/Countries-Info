import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import InnerPage from "./Components/InnerPage";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:id" component={InnerPage} />
      </Switch>
    </>
  );
};

export default App;
