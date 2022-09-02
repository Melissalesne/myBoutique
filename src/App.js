import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CategoryCards from "./Components/CategoryCards";
import HomeScreen from "./Pages/HomeScreen";

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <CategoryCards />
    </div>
  );
}

export default App;
