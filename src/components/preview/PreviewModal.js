import React from "react";
import ReactDOM from "react-dom";
import Preview from "./Preview";
import Backdrop from "../Backdrop";

function PreviewModal({ id, ModalHandler }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Preview id={id} ModalHandler={ModalHandler} />,
        document.getElementById("preview")
      )}
      {ReactDOM.createPortal(
        <Backdrop ModalHandler={ModalHandler} />,
        document.getElementById("preview")
      )}
    </React.Fragment>
  );
}

export default PreviewModal;
