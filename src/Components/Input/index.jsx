import React from "react";
import "./Input.css";
function Input() {
  return (
    <div className="input-area d-flex justify-content-center align-items-center border">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <input placeholder="Title..." className="my-2 w-25" />
        <input placeholder="Input..." className=" w-25" />
        <div className="p-4 secondary-border">+</div>
      </div>
    </div>
  );
}

export default Input;
