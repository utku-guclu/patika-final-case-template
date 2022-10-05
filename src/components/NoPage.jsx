import { Component } from "react";

class NoPage extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Opps</h1>
        <p>Page not found👾</p>
        <img src={require("../images/404.png")} alt="404" />
      </>
    );
  }
}

export default NoPage;
