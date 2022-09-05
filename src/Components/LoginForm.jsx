function LoginForm() {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target; //je récupère le form
    const formData = new FormData(form); //je converti le form en FormData
    const jsonData = Object.fromEntries(formData.entries()); //je récupère l'ensemble des inputs ayant un name (name et value)
    //version sur une seule ligne :
    const jsonData2 = Object.fromEntries(new FormData(evt.target));
    console.log(jsonData);
  };

  return (
    <div className="container bg-dark text-white mt-5 rounded-3 pt-2">
      <h2 className="text-center mt-5 fs-2">Contactez-Nous</h2>
      <form className="p-5" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label fs-5">
            Nom
          </label>
          <input
            name="name"
            type="name"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-5">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            name="cgu"
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Envoyer
        </button>
      </form>
      <div></div>
    </div>
  );
}

export default LoginForm;
