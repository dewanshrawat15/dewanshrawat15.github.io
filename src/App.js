import React from 'react';
// import {
//   Switch,
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
import Switch from "react-router-dom/Switch";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
// import Redirect from "react-router-dom/Redirect";
import Home from './Pages/Home/Home';
import FourOFourPage from "./Pages/FourZeroFour/404";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <FourOFourPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
