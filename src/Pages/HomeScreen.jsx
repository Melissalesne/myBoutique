import React from "react";
import CategoryCards from "../Components/CategoryCards";
import "./homeScreen.css";

export default function HomeScreen() {
  return (
    <>
      <h1>La boutique de John Doe</h1>
      <div className="container d-flex ">
        <CategoryCards
          title={"homme"}
          description={"La mode pour lui"}
          image={"./assets/images/categorie-homme.jpg"}
        />
        <CategoryCards
          title={"femme"}
          description={"La mode pour elle"}
          image={"./assets/images/categorie-femme.jpg"}
        />
        <CategoryCards
          title={"enfant"}
          description={"La mode pour eux"}
          image={"./assets/images/girl.jpg"}
        />
        <CategoryCards
          title={"baby"}
          description={"La mode pour eux aussi"}
          image={"./assets/images/baby.jpg"}
        />
      </div>
    </>
  );
}
