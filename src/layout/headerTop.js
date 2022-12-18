import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const HeaderTop = () => {
  return (
    <>
      <div className="headerTop">
        <div className="container">
          <div className="row">
            <div className="Wrapper">
              <div className="wrapperInner">
                <div className="wrapperin">
                  <img src={require("../assets/images/Vector.png")} />
                  <span>
                    <a href="">Some Offer / CTA goes here / Lorem Ipsum </a>
                  </span>
                </div>
                <div className="wrapperin d-flex align-items-center">
                  <a href="#">Who We Are</a>
                  <a href="#">Contact Us</a>
                  <ul className="d-flex align-items-center">
                    <li>
                      <FaFacebookF className="socailIcon"/>
                    </li>
                    <li>
                      <FaLinkedinIn className="socailIcon"/>
                    </li>
                    <li>
                      <FaTwitter className="socailIcon"/>
                    </li>

                    <li>
                      <FaInstagram className="socailIcon"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
