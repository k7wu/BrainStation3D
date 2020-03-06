import React, { Component } from "react";
import "./styles/main.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Topics from "./components/Topics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={Topics} />
            {/* <Route
              path="/video/:id"
              render={props => {
                return <Home {...props} />;
              }}
            /> */}
          </Switch>
        </Router>
        {/* <Topics /> */}
      </>
    );
  }
}
export default App;
