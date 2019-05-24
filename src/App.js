import React, { Component } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import O_meni from "./components/O_meni";
import Home from "./components/Home";
import Galerija from "./components/Galerija";
import Seminarski from "./components/Seminarski";
import Media from "./components/Media";
import Kontakt from "./components/Kontakt";
import Error from "./components/Error";
import { HashRouter, Route, Switch } from "react-router-dom";
import DroppableComponent from "./components/DroppableComponent";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <HashRouter>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/droppable" component={DroppableComponent} exact />
              <Route path="/about" component={O_meni} />
              <Route path="/gallery" component={Galerija} />
              <Route path="/seminar" component={Seminarski} />
              <Route path="/media" component={Media} />
              <Route path="/contact" component={Kontakt} />
              <Route component={Error} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
