import { Component } from "react";
import Modal from "./Modal";
import { modals } from "../data/data.js";

class Modals extends Component {
  state = { modals };

  render() {
    return (
      <>
        <div className="modals">
          <div id="modals-container" className="grid-container">
            {modals.map((modal, index) => {
              const { image, header, description } = modal;
              return (
                <div key={index} className="grid-item">
                  <Modal
                    display={true}
                    image={image}
                    header={header}
                    description={description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Modals;
