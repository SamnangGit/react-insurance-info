import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import CompanyDashboard from "./components/CompanyDashboard";
import AssessmentQ from "./components/AssessmentQ";
import CompanyDetail from "./components/CompanyDetail";
import BookApointment from "./components/BookApointment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black h-screen">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
