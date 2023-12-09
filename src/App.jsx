import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import products from "./products";

function App() {
  return (
    <div>
      <div className="menu">
        {products.map((product) => {
          return (
            <div className="menu-item-wrapper">
              <Link to={`/${product.name}`} className="menu-item">
                <div className="item-name">{product.name}</div>
                <div className="item-desc">{product.desc}</div>
              </Link>
              <div className="scatter-img">
                <div
                  className="fragment-wrapper"
                  style={{
                    top: product.split_img[0].top,
                    left: product.split_img[0].left,
                  }}
                >
                  <div
                    style={{ backgroundImage: `url(${product.images[1]})` }}
                    className="fragment"
                  ></div>
                </div>
                <div
                  className="fragment-wrapper"
                  style={{
                    top: product.split_img[1].top,
                    left: product.split_img[1].left,
                  }}
                >
                  <div
                    style={{ backgroundImage: `url(${product.images[1]})` }}
                    className="fragment"
                  ></div>
                </div>
                <div
                  className="fragment-wrapper"
                  style={{
                    top: product.split_img[2].top,
                    left: product.split_img[2].left,
                  }}
                >
                  <div
                    style={{ backgroundImage: `url(${product.images[1]})` }}
                    className="fragment"
                  ></div>
                </div>
                <div
                  className="fragment-wrapper"
                  style={{
                    top: product.split_img[3].top,
                    left: product.split_img[3].left,
                  }}
                >
                  <div
                    style={{ backgroundImage: `url(${product.images[1]})` }}
                    className="fragment"
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
