import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page404 from "./pages/404";
import About from "./pages/About";
import HomePage from "./pages/HomePage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
