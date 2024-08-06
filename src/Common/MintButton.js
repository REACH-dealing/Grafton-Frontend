import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function MintButton({ text, btnType, onClick }) {
  return (
    <>
      <button type={btnType} onClick={onClick} className="MintButton w-100">
        {text}
      </button>
    </>
  );
}

export default MintButton;
