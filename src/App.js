import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import HomeScreen from "./Pages/HomeScreen";

function App() {
  const category = [
    {
      title: "homme",
      description: "La mode pour les hommes",
      image: "./assets/images/categorie-homme.jpg",
    },
    {
      title: "femme",
      description: "La mode pour les femmes",
      image: "./assets/images/categorie-femme.jpg",
    },
    {
      title: "enfant",
      description: "La mode pour les enfants",
      image: "./assets/images/girl.jpg",
    },
    {
      title: "baby",
      description: "La mode pour les bébé",
      image: "./assets/images/baby.jpg",
    },
  ];

  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
