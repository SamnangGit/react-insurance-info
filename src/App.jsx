import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black w-12/12 h-1/2">
      <p className="text-white">Hello this is tailwind</p>
    </div>
  );
}

export default App;
