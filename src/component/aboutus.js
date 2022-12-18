import React from "react";
import { alignPropType } from "react-bootstrap/esm/types";
import Button from "./Button/Button";

const Aboutus = () => {
  return (
    <>
      <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col image">
              <img src={require("../assets/images/about.png")} alt="about" />
            </div>
            <div className=" col aboutText">
              <div className="heading">
                <h1>Some Information About Law For Me</h1>
              </div>
              <div className="pera">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lectus amet ullamcorper condimentum posuere. Ornare enim purus
                  orci id senectus enim. Fames justo pretium eget est sed purus
                  risus. Vel aliquet ornare velit at id aliquam facilisis. Nunc
                  mattis.
                </p>
              </div>
              <div className="Button">
                <Button Text="About us" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col aboutText">
              <div className="heading">
                <h1>Lorem ipsum dolor sit</h1>
              </div>
              <div className="pera">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lectus amet ullamcorper condimentum posuere. Ornare enim purus
                  orci id senectus enim.
                </p>
              </div>
              <div className="Button newbtn">
                <Button Text="How to Guides" />
              </div>
            </div>
            <div className="col image ">
              <img src={require("../assets/images/about.png")} alt="about" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
