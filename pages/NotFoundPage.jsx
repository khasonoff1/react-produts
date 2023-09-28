import React, { Component } from "react";
import { Container } from "react-bootstrap";

export class NotFoundPage extends Component {
  render() {
    return (
      <section>
        <Container>
          <h2 className="text-center">Page Not Found!</h2>
        </Container>
      </section>
    );
  }
}

export default NotFoundPage;
