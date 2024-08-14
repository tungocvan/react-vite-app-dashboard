import React from 'react';
import "./Modal.scss";

function Modal({ isOpen, onClose, Content , Data }) {
  return (
    <div className="my-modal">
      <div className={`popup-container ${isOpen ? 'active' : ''}`}>
        <div className={`popup-box ${isOpen ? 'active' : ''}`}>
         <Content closeModal={onClose} Data={Data}/>     
        </div>
      </div>
    </div>
  );
}

export default Modal;


