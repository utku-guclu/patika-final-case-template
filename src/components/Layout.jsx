import Modal from "./Modal";
import { useEffect, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { modals } from "../data/data.js";
import { useNavigate } from "react-router-dom";

function Layout() {
  const { display, setDisplay } = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const mainModal = modals[0];
  const { image, header, description } = mainModal;

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1500);
  }, [setDisplay]);

  return (
    <div className="container">
      <div className="header">
        <nav className="navbar">
          <div className="right">
            <div className="modal-cards">
              <img
                onClick={() => navigate("/")}
                className="icon"
                src={require("../images/icon.png")}
                alt="icon"
              />
              <span className="modal-cards--text">
                <strong>modal.cards</strong>
              </span>
            </div>
            <div className="middle">
              <div className="dropdown">
                <button className="dropbtn">
                  Solutions
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <Link to="#">Solution 1</Link>
                  <Link to="#">Solution 2</Link>
                  <Link to="#">Solution 3</Link>
                </div>
              </div>
              <Link to="#">Product Tour</Link>
              <Link to="#">Showcase</Link>
              <Link to="#">Pricing</Link>
            </div>
          </div>
          <div className="left">
            <Link
              onClick={() => {
                setDisplay(true);
              }}
              to="#"
              className="signin"
            >
              Sign in
            </Link>
            <Link to="modals" className="purple-border" id="try-for-free">
              <span className="btn">Try for free</span>
            </Link>
          </div>
        </nav>
        <div className="burger">
          <a className="icon-one" href="#drawer">
            <div className="hamburger hamburger-one"></div>
          </a>
        </div>
      </div>
      <aside id="drawer">
        <header>
          <a
            onClick={() => setIsActive((prev) => !prev)}
            href="/#"
            id="icon-one"
            className={`icon-one ${isActive ? "active-one" : ""}`}
          >
            <div className="hamburger hamburger-one"></div>
          </a>
        </header>
        <nav>
          <h1>
            <Link to="#">Solutions</Link>
          </h1>
          <h1>
            <Link to="#">Product Tour</Link>
          </h1>
          <h1>
            <Link to="#">Showcase</Link>
          </h1>
          <h1>
            <Link to="#">Pricing</Link>
          </h1>
        </nav>
      </aside>
      <div className="main">
        <Outlet />
        <div className={`modal ${display ? "" : "hide-modal"}`} id="modal">
          <Modal
            display={display}
            description={description}
            header={header}
            image={image}
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;
