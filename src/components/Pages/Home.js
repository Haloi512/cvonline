import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">Welcome To My PortPolio</div>
            <div className="masthead-heading text-uppercase">
              It's Nice To Meet You
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#services"
            >
              Contact me
            </a>
          </div>
        </header>
      </div>
    );
  }
}
