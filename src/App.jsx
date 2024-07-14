import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/Navigation/ContactHeader/ContactHeader";
import Button from "./components/Navigation/Button/Button";
import ContactForm from "./components/Navigation/ContactForm/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
      <Button />
    </div>
  );
}

export default App;
