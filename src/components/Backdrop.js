import React from "react";

function Backdrop({ ModalHandler }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        backdropFilter: "blur(3px)",
        zIndex: "100",
      }}
      onClick={() => {
        ModalHandler(false);
      }}
    ></div>
  );
}

export default Backdrop;
