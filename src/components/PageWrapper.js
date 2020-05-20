import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageWrapper extends Component {
  render() {
    return (
      <div id="page-top ">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div class="container">
            <Link class="navbar-brand js-scroll-trigger" to="/">
              <h1>cvOnline</h1>
            </Link>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu<i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                  <Link class="nav-link js-scroll-trigger" to="/services">
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll-trigger" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll-trigger" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll-trigger" to="/team">
                    Team
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll-trigger" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
