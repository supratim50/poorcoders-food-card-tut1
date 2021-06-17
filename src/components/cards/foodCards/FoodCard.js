import React from "react";
import image from "../../../assets/images/pizza.png";
import background from "../../../assets/images/background.svg";
import Button from "../../buttons/Button";

//CSS
import "./FoodCard.css";

const FoodCard = () => {
  return (
    <div className="card-box">
      {/* BACKGROUND SVG  */}
      <div className="background-box">
        <img className="background-image" src={background} />
      </div>
      {/* CARD IMAGE */}
      <div className="image-box">
        <img className="image" src={image} />
      </div>
      {/* CARD DETAILS */}
      <div className="details-box">
        <h4 className="heading">
          Double Cheese Margherita. loaded with extra cheese... oodies of it!{" "}
        </h4>

        <div className="price-details">
          <h1 className="price">$11.99</h1>
          <Button text="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
