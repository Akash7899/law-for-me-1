import React from "react";

const Legalcard = (props) => {
  return (
    <>
      <div className="subcards d-flex align-items-center justify-content-center">
        <div className="icon">
          <img src={props.imgsrc} alt="icons" />
        </div>
        <div className="contnt">
          <p>{props.name}</p>
        </div>
      </div>
    </>
  );
};

export default Legalcard;
