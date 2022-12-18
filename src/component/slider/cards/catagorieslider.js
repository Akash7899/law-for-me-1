import React from "react";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding";

const Propslider = (props) => {
  return (
    <>
      <div className="catagories">
        <div className="catagories-slide">
          <img src={props.imgsrc} />
          <BsBuilding className="buillding" />
          <div className="text text-center">
            <p>
              {props.categories} <BsArrowRight className="rightarrow" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Propslider;
