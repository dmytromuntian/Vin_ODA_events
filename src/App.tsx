import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Registration from "./pages/registration/Registration";
import EventRegistration from "./pages/eventRegistration/EventRegistration";
import EventVerification  from "./pages/eventVerification/EventVerification";
import Login from "./pages/login/Login";
import Confirmation from "./pages/confirmation/Confirmation";
import Error404 from "./pages/404/404";
import "./fonts/e-Ukraine-Bold.otf";
import "./fonts/e-Ukraine-Light.otf";
import "./fonts/e-Ukraine-Medium.otf";
import "./fonts/e-Ukraine-Regular.otf";
import "./fonts/e-Ukraine-Thin.otf";
import "./fonts/e-Ukraine-UltraLight.otf";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/event-registration" element={<EventRegistration />} />
          <Route path="/event-verification" element={<EventVerification  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
