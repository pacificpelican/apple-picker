import React, { Component } from "react";

//  Invoicechartrow.js ReactJS 16.3+ component for apple-picker
//  by Dan McKeown http://danmckeown.info copyright 2018

import Invoiceprinoutwrapper from "./Invoiceprintoutwrapper";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Invoicechartrow extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
   // this.subtitle.style.color = '#f00';
   let bg = document.getElementById("basicComponentDiv");
   bg.style.visibility = "hidden";
  }

  closeModal() {
    let bg = document.getElementById("basicComponentDiv");
    bg.style.visibility = "visible";
    this.setState({ modalIsOpen: false });
  }

  render(props) {
    let interVal = this.props.interVal;
    return (
      <div className="dataZone">
        <span className="accountrecievable-date" key={interVal.value.date}>{interVal.value.date}</span>
        <span className="accountrecievable--amount" key={interVal.value.amount}>{interVal.value.amount}</span>
        <span className="accountrecievable-description" key={interVal.value.description}>{interVal.value.description}</span>
        <span className="accountrecievable--payee" key={interVal.value.debtor}>{interVal.value.debtor}</span>
        <span className="accountrecievable-notes" key={interVal.value.notes}>{interVal.value.notes}</span>
        <section className="details-printout">
          <details>
            <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
            <Invoiceprinoutwrapper invoicetracker={interVal.value.invoiceLocator} />
            </Modal>
          </details>
        </section>
      </div>
    )
  }
}

export default Invoicechartrow;
