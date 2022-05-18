import React from "react";
import {
  Routes,
  Route,
  HashRouter,
  unstable_HistoryRouter as Router,
} from "react-router-dom";
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";
import { history } from "./store/history";

const RouteElement = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </Router>
  );
};

export default RouteElement;
