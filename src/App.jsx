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
            <Link to={`/${product.name}`} className="menu-item">
              <div className="item-name">{product.name}</div>
              <div className="item-desc">{product.desc}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default App;
