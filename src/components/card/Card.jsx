import React, { Component } from "react";

import "./card.css";
import { Link } from "react-router-dom";

export class Card extends Component {
  render() {
    const { id, title, image, price, description, category } = this.props;
    return (
      <Link to={`/${id}`}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="img-box">
            <img className="card-img" src={image} alt={title} />
            <p className="category">{category}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
