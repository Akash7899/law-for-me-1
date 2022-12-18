import React from "react";
import Button from "react-bootstrap/Button";

const Summrycard = (props) => {
  return (
    <>
      <div className="summarycard">
        <div className="">
          <img src={props.imgsrc} className="icon" />
          <span>{props.title}</span>
          <div className="">
            <p>{props.content}</p>
          </div>
          <div className="Buttontest">
            <Button variant="secondary">£125 + VAT</Button>
            <Button variant="primary">Buy Now</Button>
          </div>
          <div className="horizentalLine">
            <span className="spanor">or</span>
          </div>
          <div className="FullButton">
            <Button className="" variant="danger">
              Access for Free
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summrycard;
