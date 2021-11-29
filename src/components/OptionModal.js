import React from "react";
import Modal from 'react-modal';

const OptionModal = (props)=>(
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>

        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}

        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>

    </Modal>
);
// in order for <Modal> to work needs these props isOpen(accepts a boolean true modal shows up false the opposite) and contentLabel(modal name)
// !! will only allow boolean answers ex !!undefined will equal true and !!'cat' will equal true
//onRequestClose allows us to click the background and something will happen in this case the modal goes away. This accepts a function.
// closeTimeoutMS is for the amount of time you want to wait before closing the modal.
// if we put prop className="modal" then all the set default classes of the modal will not be there. This is if you want to fully customize the modal.

export default OptionModal;