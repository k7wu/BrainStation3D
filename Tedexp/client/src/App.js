import React, { Component } from "react";
import "./styles/main.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Topics from "./components/Topics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Hero />
          <Switch>
            <Route path="/" exact component={Main} />

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
