// import { CancelRounded } from "@mui/icons-material";
import React from "react";

function Modal(props) {
  const {
    modalId="modal",
    modalTitle,
    onClose = () => {},
    children,
  } = props;

  // const styleCloseButton = {
  //   textAlign: "end",
  //   top: 16,
  //   cursor: "pointer",
  //   display: "flex",
  //   color: "#E74245"
  // }

  const handleOutsideClick = (e) => {
    if (e.target.id === modalId) onClose();
  };

  return(
    <div id={modalId} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <div className="modal-header">
          <p>{modalTitle}</p>
          {/* <CancelRounded
            style={styleCloseButton}
            onClick={onClose}
          /> */}
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
};

export default Modal;