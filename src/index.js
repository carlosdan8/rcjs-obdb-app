import React, { Fragment } from "react";
import ReactDom from "react-dom";

import List from "./containers/List";

import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand">
          Movie App
        </a>
      </nav>

      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("App"));
