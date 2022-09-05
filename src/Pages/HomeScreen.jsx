import React from "react";
import CategoryCards from "../Components/CategoryCards";
import "./homeScreen.css";

export default function HomeScreen() {
  function handleSubmit(evt) {
    evt.preventDefault();
  }
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
        <br />
      </div>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <div className="container mt-5 bg-dark rounded-3">
          <h3 className="text-center mt-5 text-white">Contactez-Nous...</h3>
          <div className="mb-3 w-50 m-auto">
            <label htmlFor="name">Nom: </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nom, Prénom"
            />
          </div>
          <div className="mb-3 w-50 m-auto">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="adress@gmail.com"
            />
          </div>
          <div className="mb-3 w-50 m-auto">
            <label htmlFor="Textarea">Textarea:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Sujet"
            ></textarea>
            <input
              type="submit"
              value="envoyer"
              className="btn btn-primary mt-3 d-flex m-auto"
            />
          </div>
        </div>
      </form>
    </>
  );
}
