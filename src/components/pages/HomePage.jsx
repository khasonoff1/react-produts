import React, { Component, Fragment } from "react";

import axios from "axios";
import { Container } from "react-bootstrap";
import Card from "../card/Card";
import { toast } from "react-toastify";
import Loading from "../shares/Loading";
import { LIMIT } from "../shares/const";

export class HomePage extends Component {
  state = {
    products: [],
    total: 0,
    loader: false,
  };
  async getData(page = 1) {
    try {
      this.setState({ loader: true });
      let { data } = await axios.get("https://fakestoreapi.com/products", {
        params: { page: page, limit: LIMIT },
      });
      let { data: allData } = await axios.get(
        "https://fakestoreapi.com/products"
      );

      this.setState({ products: data, total: allData.length });
    } catch (err) {
      console.log(err);
      toast.error("Error");
    }
    this.setState({ loader: false });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const { products, loader, total } = this.state;

    const pages = Math.ceil(total / LIMIT);

    const getPage = (page) => {
      this.getData(page);
    };
    return (
      <Fragment>
        <section>
          <Container>
            <h2>Products ({total})</h2>
            <div className="cards d-flex justify-content-center gap-5 flex-wrap">
              {loader ? (
                <Loading />
              ) : (
                products.map((product) => (
                  <Card key={product.id} {...product} />
                ))
              )}
              <div className="d-flex gap-3">
                {Array(pages)
                  .fill(1)
                  .map((_, i) => (
                    <button className="p-btn" onClick={() => getPage(i + 1)}>
                      {i + 1}
                    </button>
                  ))}
              </div>
            </div>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
