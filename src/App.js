import React from 'react';
import Switch from "react-router-dom/Switch";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
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
