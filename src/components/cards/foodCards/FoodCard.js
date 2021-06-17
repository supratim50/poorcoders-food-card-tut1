import React, { useState } from "react";

import image from "../../../assets/images/pizza.png";
import background from "../../../assets/images/background.svg";
import Button from "../../buttons/Button";

//CSS
import "./FoodCard.css";

const FoodCard = () => {
  const [active, setActive] = useState(false);

  const setActiveFunc = () => {
    setActive(!active);
  };

  return (
    <div className={`card-box ${active ? "card-box-active" : ""}`}>
      {/* BACKGROUND SVG  */}
      <div className="background-box">
        <img className="background-image" src={background} />
      </div>
      {/* CARD IMAGE */}
      <div
        className={`image-box ${active ? "image-box-active" : ""}`}
        onClick={setActiveFunc}
      >
        <img className="image" src={image} />
      </div>
      {/* CARD DETAILS */}
      <div className={`details-box ${active ? "details-box-active" : ""}`}>
        <h4 className={`heading ${active ? "heading-active" : ""}`}>
          Double Cheese Margherita. loaded with extra cheese... oodies of it!{" "}
        </h4>
        <p className={`food-details ${active ? "food-details-active" : ""}`}>
          The term pizza was first recorded in the 10th century in a Latin
          manuscript from the Southern Italian town of Gaeta in Lazio, on the
          border with Campania.
        </p>

        <div className="price-details">
          <h1 className={`price ${active ? "price-active" : ""}`}>$11.99</h1>
          {active ? (
            <Button text="Buy Now" active />
          ) : (
            <Button text="Buy Now" />
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
