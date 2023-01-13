import React from "react";
import ReactDOM from "react-dom";
import MoreDetail from "./MoreDetail.js";
import Backdrop from "./Backdrop.js";

function DetailModal({ ModalHandler }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <MoreDetail ModalHandler={ModalHandler} />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <Backdrop ModalHandler={ModalHandler} />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
}

export default DetailModal;
