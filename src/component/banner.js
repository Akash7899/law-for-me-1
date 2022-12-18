import React from "react";
import Aboutus from "./aboutus";
import Clientcard from "./clientcard";
import Legalcard from "./legalcard";
import SimpleSlider from "./slider/cards/catagories-slider";
import Summrycard from "./summrycard";

const Banner = () => {
  return (
    <>
      <section>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="bannerImage">
                  <img
                    src={require("../assets/images/banner.png")}
                    alt="bannerImg"
                  />
                </div>
              </div>
              <div className="col-sm">
                <div className="right">
                  <div className="content">
                    <h1>
                      Law For Me helps you <span className="">understand </span>
                      the law
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Non scelerisque faucibus nunc, turpis metus volutpat ac
                      tristique non. Ultricies faucibus amet, nullam netus orci,
                      placerat egestas porta. Tortor arcu turpis natoque at est
                      urna.
                    </p>
                  </div>
                  <div className="searchBtn">
                    <form>
                      <input
                        type="text"
                        className="serach-int serach-inpf"
                        placeholder="Search documents and topics..."
                      />
                      <button
                        className="searchbtn"
                        type="button"
                        value="search"
                      >
                        <div className="serach-img">
                          <img
                            src={require("../assets/images/search-normal.png")}
                            width="20"
                            height="20"
                            alt="search"
                          />
                        </div>
                      </button>
                    </form>
                  </div>
                  <div className="logos">
                    <ul className="d-flex justify-content-between align-items-center">
                      <li>
                        <img
                          src={require("../assets/images/Banner Logo/1.png")}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          src={require("../assets/images/Banner Logo/2.png")}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          src={require("../assets/images/Banner Logo/3.png")}
                          alt="logo"
                        />
                      </li>
                      <li>
                        <img
                          src={require("../assets/images/Banner Logo/4.png")}
                          alt="logo"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legalDocuments">
        <div className="container">
          <div className="row">
            <div className="content text-center pb-5">
              <h1>Legal Documents</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
                non massa commodo, nibh sed diam arcu. Condimentum sagittis
                purus.
              </p>
            </div>

            <div className="card1 d-flex justify-content-around align-items-center pb-5">
              <Legalcard
                imgsrc={require("../assets/images/icons/2.png")}
                name="Employment Law & HR"
              />
              <Legalcard
                imgsrc={require("../assets/images/icons/1.png")}
                name="Business Law"
              />
              <Legalcard
                imgsrc={require("../assets/images/icons/3.png")}
                name="
                Wills & Trusts"
              />
              <Legalcard
                imgsrc={require("../assets/images/icons/4.png")}
                name="Bespoke Agreements"
              />
            </div>

            <div className="cardMian d-flex">
              <div className="cardleft">
                <div className="cardheading">
                  <h2>How it Works</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <img src={require("../assets/images/card1.png")} />
                </div>
              </div>

              <div className="cardRight">
                <div className="rightcard d-flex">
                  <Summrycard
                    imgsrc={require("../assets/images/icons/Vector (1).png")}
                    title="Letters"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue."
                  />
                  <Summrycard
                    imgsrc={require("../assets/images/icons/Vector (1).png")}
                    title="Letters"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue."
                  />
                  <Summrycard
                    imgsrc={require("../assets/images/icons/Vector (1).png")}
                    title="Letters"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue."
                  />
                  <Summrycard
                    imgsrc={require("../assets/images/icons/Vector (1).png")}
                    title="Letters"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <SimpleSlider />
      <Clientcard />
      <Aboutus /> */}
    </> 
  );
};

export default Banner;
