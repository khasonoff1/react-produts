import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export class Loading extends Component {
  render() {
    return <Spinner className="loader" animation="border" variant="primary" />;
  }
}

export default Loading;
