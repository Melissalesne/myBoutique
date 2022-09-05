import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CategoryCards from "./Components/CategoryCards";
import HomeScreen from "./Pages/HomeScreen";

function App() {
  const category = [
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

  category.map((category) => <CategoryCards />);
  return (
    <div className="" key={category.id}>
      <HomeScreen
        title={category.title}
        description={category.description}
        image={category.image}
      />
    </div>
  );
}

export default App;
