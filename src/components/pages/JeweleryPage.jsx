import React, { Component } from "react";

import axios from "axios";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Loading from "../shares/Loading";
import Card from "../card/Card";

export class JeweleryPage extends Component {
  state = {
    products: [],
    loader: false,
  };
  async getData() {
    try {
      this.setState({ loader: true });
      let { data } = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      this.setState({ products: data });
    } catch (err) {
      toast.error("Error");
    }
    this.setState({ loader: false });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const { products, loader } = this.state;
    return (
      <section>
        <Container>
          <div className="cards d-flex justify-content-center gap-5 flex-wrap">
            {loader ? (
              <Loading />
            ) : (
              products.map((product) => <Card key={product.id} {...product} />)
            )}
          </div>
        </Container>
      </section>
    );
  }
}

export default JeweleryPage;
