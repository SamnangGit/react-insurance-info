import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import AssessmentQ from "./components/AssessmentQ";
import CompanyDetail from "./components/CompanyDetail";

import BookApointment from "./components/BookApointment";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black h-screen">
       <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage /> } />
         
          <Route path="/company/:companyId" element={<CompanyDetail />} />
          <Route path="/assessment" element={<AssessmentQ />} />
          <Route path="/book" element={<BookApointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
