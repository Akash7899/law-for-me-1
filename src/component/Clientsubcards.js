import React from "react";
import Card from "react-bootstrap/Card";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

const Clientsubcards = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", textAlign: "center" }}>
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-name">{props.name}</h5>
          <h3 className="card-title">{props.profile}</h3>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            Know More <MdKeyboardArrowRight />
          </a>
        </div>
      </div>
      {/* <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Title>{props.profile}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">
            Know More <MdKeyboardArrowRight />
          </Card.Link>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default Clientsubcards;
