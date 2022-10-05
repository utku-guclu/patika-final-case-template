import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <h1 className="modal-header">
          Simple modal <br /> card creator
        </h1>
        <p className="main-p">
          A utility-first CSS framework packed with classNameeslike flex, pt-4,
          text-center and rotate-90 that can becomposed to build any design,
          directly in your markup.
        </p>
        <Link className="purple-border" to="modals">
          <span className="btn">Try it out now</span>
        </Link>
      </>
    );
  }
}

export default Home;
