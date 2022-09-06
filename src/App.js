import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LoginForm from "./Components/LoginForm";
import HomeScreen from "./Pages/HomeScreen";

function App() {
  const [isDark, setIsDark] = useState(false);

  const checkbox = () => {
    setIsDark(!isDark);
  };
  if (isDark === false) {
    console.log("App");
  } else {
    console.log("App bg-dark text-white");
  }

  return (
    <div>
      <HomeScreen />
      <LoginForm />
    </div>
  );
}

export default App;
