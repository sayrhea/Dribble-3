import React from "react";
import "./App.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import products from "./products";

function DetailsView() {
  const params = useParams();
  const productName = params.product;
  let product = null;

  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    if (element["name"] === productName) {
      product = element;
      break;
    }
  }

  return (
    <div>
      <main className="main-frame">
        <div className="header">
          <Link className="go-back" to="/">
            <FaLongArrowAltLeft /> BACK
          </Link>
          <h2>{product.name}</h2>
          <p className="para">{product.desc}</p>
        </div>
        <div className="images">
          <div className="image">
            <img src={product.images[0]} />
          </div>
          <div className="image main-image">
            <img src={product.images[1]} />
          </div>
          <div className="image">
            <img src={product.images[2]} />
          </div>
          <div className="image">
            <img src={product.images[3]} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailsView;
