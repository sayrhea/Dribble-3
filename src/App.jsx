import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="menu">
        <Link to={"/1"} className="menu-item">
          <div className="item-name">HydroOasis</div>
          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vero veritatis ducimus eius voluptatem totam qui aspernatur illum
            magni ipsam?
          </div>
        </Link>
        <Link className="menu-item">
          <div className="item-name">AlgaZen</div>
          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vero veritatis ducimus eius voluptatem totam qui aspernatur illum
            magni ipsam?
          </div>
        </Link>
        <Link className="menu-item">
          <div className="item-name">NeuroBoost</div>
          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vero veritatis ducimus eius voluptatem totam qui aspernatur illum
            magni ipsam?
          </div>
        </Link>
        <Link className="menu-item">
          <div className="item-name">EcoElevate</div>
          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vero veritatis ducimus eius voluptatem totam qui aspernatur illum
            magni ipsam?
          </div>
        </Link>
        <Link className="menu-item">
          <div className="item-name">HerbaVigor</div>
          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vero veritatis ducimus eius voluptatem totam qui aspernatur illum
            magni ipsam?
          </div>
        </Link>
        <Link className="menu-item">
          <div className="item-name">OhmAlchemy</div>
          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vero veritatis ducimus eius voluptatem totam qui aspernatur illum
            magni ipsam?
          </div>
        </Link>
        <Link className="menu-item">
          <div className="item-name">FruitFuse</div>
          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vero veritatis ducimus eius voluptatem totam qui aspernatur illum
            magni ipsam?
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
