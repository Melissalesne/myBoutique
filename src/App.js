import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LoginForm from "./Components/LoginForm";
import HomeScreen from "./Pages/HomeScreen";

function App() {
  return (
    <div>
      <HomeScreen />
      <LoginForm />
    </div>
  );
}

export default App;
