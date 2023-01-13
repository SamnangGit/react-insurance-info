import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import CompanyDashboard from "./components/CompanyDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black pb-12">
        <Navbar />
        <MainPage />
      </div>
      <div className="my-8">
        <CompanyDashboard />
      </div>
    </>
  );
}

export default App;
