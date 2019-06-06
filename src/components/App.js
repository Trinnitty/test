import React from "react";
import { Route, Link } from "react-router-dom";
import Main from "./Main";
import Actors from "./Actors";

export default function App() {
  return (
    <div className="App">
      <h3>Test #6</h3>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/actors">Actors</Link>
        </li>
      </ul>
      <Route exact path="/" component={Main} />
      <Route path="/actors" component={Actors} />
    </div>
  );
}
