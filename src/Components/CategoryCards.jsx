import React from "react";
import "./categoryCards.css";

const CategoryCards = ({ title, description, image }) => {
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div>
            <a
              href="#"
              className="btn btn-outline-dark d-flex justify-content-center"
            >
              + de détails
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryCards;
