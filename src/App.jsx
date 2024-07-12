import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
