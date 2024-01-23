import React from "react";
import form from "../../../assets/Img/File.svg";
import file from "../../../assets/Img/form.png";
import "../addform/addform.css";

function Addform() {
  return (
    <>
      <div className="total">
        <div className="enquiry">
          <img alt="icon" className="icon" src={form} />
          Enquiry form
        </div>
        <div className="register">
          <img alt="icon" className="icon" src={form} />
          Register form
        </div>
        <div className="admission">
          <img alt="icon" className="icon" src={form} />
          Admission form
        </div>
        <div className="details">
          <img alt="icon" className="icon" src={form} />
          Details form
        </div>
        <div className="fee">
          <img alt="icon" className="icon" src={form} />
          Fee form
        </div>
        <div className="certify">
          <img alt="icon" className="icon" src={form} />
          Certificate form
        </div>
        <div className="feedback">
          <img alt="icon" className="icon" src={file} />
          Feedback form
        </div>
      </div>
    </>
  );
}

export default Addform;
