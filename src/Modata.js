import React, { Component, useState } from "react";
import Modal from "react-modal";
import "./Modata.css";

/*function ModalTime() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="ModalTime">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Modal HELLOOWHELO</h2>
        <p>body of mOdal yes</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>
            close super modal
          </button>
        </div>
      </Modal>
    </div>
  );
}*/

function Modata() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="Modata">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Modal HELLOOWHELO</h2>
        <p>body of mOdal yes</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>
            close super modal
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Modata;
