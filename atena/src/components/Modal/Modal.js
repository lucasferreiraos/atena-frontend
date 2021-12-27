import React from "react";

function Modal(props) {
  const {
    modalId="modal",
    onClose = () => {},
    children,
  } = props;

  const handleOutsideClick = (e) => {
    if (e.target.id === modalId) onClose();
  };

  return(
    <div id={modalId} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
};

export default Modal;