import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./header.css";

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Container>
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    All
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/jewelery">
                    Jewelery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/electronics">
                    Electronics
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/mensClothing">
                    Men`s clothing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/womensClothing">
                    Women`s clothing
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Container>
        </header>
      </Fragment>
    );
  }
}

export default Header;
