import CloseIcon from '@mui/icons-material/Close';
import React from "react";

function Modal(props) {
  const {
    modalId="modal",
    modalTitle,
    onClose = () => {},
    children,
  } = props;

  const styleCloseButton = {
    cursor: "pointer",
    color: "#03071E"
  }

  const handleOutsideClick = (e) => {
    if (e.target.id === modalId) onClose();
  };

  return(
    <div id={modalId} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <div className="modal-header">
          <div className="modal-title">
            {modalTitle}
          </div>
          <div className="modal-button-close">
            <CloseIcon style={styleCloseButton} onClick={onClose}/>
          </div>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
};

export default Modal;