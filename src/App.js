import React from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/contact" component={Contact} />
      </PageWrapper>
    </Router>
  );
}

export default App;
