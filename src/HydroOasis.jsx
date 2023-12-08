import React from "react";
import "./App.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function HydroOasis() {
  return (
    <div>
      <main className="main-frame">
        <div className="header">
          <Link className="go-back" to="/">
            <FaLongArrowAltLeft /> BACK
          </Link>
          <h2>HydroOasis</h2>
          <p className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illum
            sed corrupti eius solut.
          </p>
        </div>
        <div className="images">
          <div className="image">
            <img src="/bottle-7.jpeg" />
          </div>
          <div className="image main-image">
            <img src="/bottle-1.jpeg" />
          </div>
          <div className="image">
            <img src="/bottle-2.jpeg" />
          </div>
          <div className="image">
            <img src="/bottle-3.jpeg" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HydroOasis;
