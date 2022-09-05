import React from "react";
import CategoryCards from "../Components/CategoryCards";
import "./homeScreen.css";

export default function HomeScreen() {
  const categoryCat = [
    {
      id: "1",
      title: "homme",
      description: "La mode pour les hommes",
      image: "./assets/images/categorie-homme.jpg",
    },
    {
      id: "2",
      title: "femme",
      description: "La mode pour les femmes",
      image: "./assets/images/categorie-femme.jpg",
    },
    {
      id: "3",
      title: "enfant",
      description: "La mode pour les enfants",
      image: "./assets/images/girl.jpg",
    },
    {
      id: "4",
      title: "baby",
      description: "La mode pour les bébé",
      image: "./assets/images/baby.jpg",
    },
  ];

  const categoryElement = categoryCat.map((category) => (
    <div className="col-12 col-lg-3" key={category.id}>
      <CategoryCards
        title={category.title}
        description={category.description}
        image={category.image}
      />
    </div>
  ));

  return (
    <>
      <h1>La boutique de John Doe</h1>
      {/* <div className="container d-flex ">
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
        <br />
      </div> */}
      <div className="d-flex">{categoryElement}</div>
    </>
  );
}
