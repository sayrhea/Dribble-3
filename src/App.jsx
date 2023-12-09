import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import products from "./products";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <div className="menu">
        {products.map((product) => {
          return (
            <div className="menu-item-wrapper">
              <Link to={`/${product.name}`} className="menu-item">
                <motion.div className="item-name">
                  {product.name.split("").map((c) => {
                    return (
                      <span
                        style={{ overflowX: "hidden", display: "inline-flex" }}
                      >
                        <motion.span
                          initial={{ x: "100%" }}
                          animate={{
                            x: 0,
                          }}
                          exit={{
                            x: "-100%",
                          }}
                          transition={{ duration: 0.4, ease: "linear" }}
                        >
                          {c}
                        </motion.span>
                      </span>
                    );
                  })}
                </motion.div>
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
