import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import CompanyDashboard from "./components/CompanyDashboard";
import AssessmentQ from "./components/AssessmentQ";
import CompanyCard from "./components/CompanyCard";
// import BookAppointment from "./components/BookApointment";
import CompanyDetail from "./components/CompanyDetail";
import BookApointment from "./components/BookApointment";

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
        <AssessmentQ />
        {/* <CompanyCard /> */}
      </div>
      {/* <BookAppointment /> */}
      <CompanyDetail />
      <BookApointment />
    </>
  );
}

export default App;
