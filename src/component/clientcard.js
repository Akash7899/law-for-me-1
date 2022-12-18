import React from "react";
import { Button } from "react-bootstrap";
import Clientsubcards from "./Clientsubcards";

const Clientcard = () => {
  return (
    <>
      <section className="clientcards py-5 ">
        <div className="container">
          <div className="row">
            <div className="clientSection d-flex pb-5">
              <div className="content">
                <h3>Meet the Lawyers</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
                  non massa commodo.
                </p>
              </div>
              <div className="viewall">
                <Button>view all</Button>
              </div>
            </div>

            <div className="cards d-flex justify-content-around align-items-center">
              <Clientsubcards
                imgsrc={require("../assets/images/client/client-1.png")}
                name="Eget Donec"
                profile="Graduate Diploma in Law"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis et sit ac ultricies."
              />
              <Clientsubcards
                imgsrc={require("../assets/images/client/client-2.png")}
                name="Pretium Habitant"
                profile="Legal Practice Course"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis et sit ac ultricies."
              />
              <Clientsubcards
                imgsrc={require("../assets/images/client/client-3.png")}
                name="Nisl Nulla"
                profile="Graduate Diploma in Law"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis et sit ac ultricies."
              />
              <Clientsubcards
                imgsrc={require("../assets/images/client/client-4.png")}
                name="Alex Turpis"
                profile="Legal Practice Course"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis et sit ac ultricies."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clientcard;
