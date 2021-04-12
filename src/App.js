import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./Component/HomePage";
import NotFound from "./Component/NotFound";
import ProductDetails from "./Component/ProductDetails";
import ProductCart from "./Component/ProductCart";
import Navigation from "./Component/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/product_detail/:id"}>
          <ProductDetails />
        </Route>
        <Route exact path={"/cart"}>
          <ProductCart />
        </Route>

        <Route exact path={"/404"}>
          <NotFound />
        </Route>
        <Route exact path={"*"}>
          <Redirect to={"/404"}></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
