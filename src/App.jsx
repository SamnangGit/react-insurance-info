import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import CompanyDashboard from "./components/CompanyDashboard";
import AssessmentQ from "./components/AssessmentQ";
import CompanyDetail from "./components/CompanyDetail";
import BookApointment from "./components/BookApointment";

import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black h-screen">
        <Navbar />
        <MainPage />
      </div>

      <BrowserRouter>
        <div>
          <Route exact path="/" component={CompanyDashboard} />
          <Route path="/assessment" component={AssessmentQ} />
          <Route path="/company/:id" component={CompanyDetail} />
          <Route path="/book" component={BookApointment} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
