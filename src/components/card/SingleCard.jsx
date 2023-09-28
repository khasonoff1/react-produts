import React, { Component } from "react";

import "./card.css";

export class SingleCard extends Component {
  render() {
    const { id, title, image, description, category, price } = this.props;
    return (
      <div className="singleCard">
        <div className="img-box singleImg-box">
          <img
            className={`singleCard-img ${
              id === 5 || id === 17 ? "s-width" : ""
            }`}
            src={image}
            alt={title}
          />
          <p className="category single-category">{category}</p>
        </div>
        <div className="singleCard-body">
          <h5 className="card-title singleCard-title">{title}</h5>
          <p className="description single-description">{description}</p>
          <p className="price">${price}</p>
        </div>
      </div>
    );
  }
}

export default SingleCard;
