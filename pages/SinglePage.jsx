import React, { Component } from "react";

import axios from "axios";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Loading from "../shares/Loading";
import SingleCard from "../card/SingleCard";
  
export class SinglePage extends Component {
  state = {
    product: [],
    loader: false,
  };
  async getData() {
    try {
      const productId = window.location.pathname.split("/").at(-1);
      this.setState({ loader: true });
      let { data } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      this.setState({ product: data });
      console.log(data);
    } catch (err) {
      toast.error("Error");
    }
    this.setState({ loader: false });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const { product, loader } = this.state;

    return (
      <section>
        <Container>
          <div>{loader ? <Loading /> : <SingleCard {...product} />}</div>
        </Container>
      </section>
    );
  }
}

export default SinglePage;
