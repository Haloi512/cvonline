import React, { Component } from "react";
import Header from "../Common/Header";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Contact from "../Pages/Contact";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome to my portpolio"
          subtitle="this is home route"
          buttonText="hire me now"
          link="/contact"
          showButton={true}
          image="assets/img/anh dep 1.jpg"
        />
        <Services />
        <Portfolio />
      </div>
    );
  }
}
