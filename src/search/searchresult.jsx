import React from "react";
import "./searchresult.css";

import { FaHeart, FaStar } from "react-icons/fa";
const Results = ({ img, location, title, description, star, price, total }) => {
  return (
    <>
      <div className="searchResult">
        <img src={img} alt="" />

        <FaHeart className="heart_icon" />

        <div className="searchResult_info">
          <div className="info-top">
            <p>{title}</p>
            <h2>{location}</h2>

            <p>___</p>
            <p>{description}</p>
          </div>
          <div className="info-bottom">
            <div className="search_star">
              <FaStar className="star_icon" />
              <p>
                <strong>{star}</strong>
              </p>
            </div>
            <div className="price_info">
              <h1>{price}</h1>
              <p>{total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
