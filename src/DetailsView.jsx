import React, { useEffect, useRef } from "react";
import "./App.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import products from "./products";
import { motion, useAnimate } from "framer-motion";

function getCoords(elem) {
  // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: Math.round(top),
    left: Math.round(left),
    width: box.width,
    height: box.height,
  };
}

function DetailsView() {
  const params = useParams();
  const productName = params.product;
  let product = null;

  const [fragmentRef, animate] = useAnimate();
  const [mainImgRef, mainImageAnimate] = useAnimate();

  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    if (element["name"] === productName) {
      product = element;
      break;
    }
  }

  useEffect(() => {
    if (!mainImgRef.current) {
      return;
    }

    setTimeout(() => {
      const rect = getCoords(mainImgRef.current);
      debugger;
      async function animateFragment() {
        animate(".fragment-wrapper:nth-child(1)", {
          top: rect.top,
          left: rect.left,
        });
        animate(".fragment-wrapper:nth-child(2)", {
          top: rect.top,
          left: Math.floor(rect.left + rect.width / 2),
        });
        animate(".fragment-wrapper:nth-child(3)", {
          top: Math.floor(rect.top + rect.height / 2),
          left: rect.left,
        });
        await animate(".fragment-wrapper:nth-child(4)", {
          top: Math.floor(rect.top + rect.height / 2),
          left: Math.floor(rect.left + rect.width / 2),
        });
        mainImageAnimate(
          "img",
          {
            opacity: 1,
          },
          { delay: 0.1 }
        );
        animate(
          ".fragment-wrapper",
          {
            opacity: 0,
          },
          { delay: 0.2 }
        );
      }
      animateFragment();
    }, 100);
  }, []);

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
          <div className="image main-image" ref={mainImgRef}>
            <motion.img
              src={product.images[1]}
              style={{ opacity: 0 }}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, transition: { delay: 0.5 } }}
            />
          </div>
          <div className="image">
            <img src={product.images[2]} />
          </div>
          <div className="image">
            <img src={product.images[3]} />
          </div>
          <motion.div className="scatter-img" ref={fragmentRef}>
            <motion.div
              className="fragment-wrapper"
              initial={{
                top: product.split_img[0].top,
                left: product.split_img[0].left,
                opacity: 1,
                scale: 1,
              }}
            >
              <div
                style={{ backgroundImage: `url(${product.images[1]})` }}
                className="fragment"
              ></div>
            </motion.div>
            <motion.div
              className="fragment-wrapper"
              initial={{
                top: product.split_img[1].top,
                left: product.split_img[1].left,
                opacity: 1,
                scale: 1,
              }}
            >
              <div
                style={{ backgroundImage: `url(${product.images[1]})` }}
                className="fragment"
              ></div>
            </motion.div>
            <motion.div
              className="fragment-wrapper"
              initial={{
                top: product.split_img[2].top,
                left: product.split_img[2].left,
                opacity: 1,
                scale: 1,
              }}
            >
              <div
                style={{ backgroundImage: `url(${product.images[1]})` }}
                className="fragment"
              ></div>
            </motion.div>
            <motion.div
              className="fragment-wrapper"
              initial={{
                top: product.split_img[3].top,
                left: product.split_img[3].left,
                opacity: 1,
                scale: 1,
              }}
            >
              <div
                style={{ backgroundImage: `url(${product.images[1]})` }}
                className="fragment"
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default DetailsView;
