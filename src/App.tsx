import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import About from "./pages/About";

import "./index.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={About} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
