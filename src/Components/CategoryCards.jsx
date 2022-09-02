import React from "react";
import "./categoryCards.css";

export default function CategoryCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3">
          <div className="card">
            <img
              src="https://picsum.photos/200/300"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Category title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
