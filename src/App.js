import React from "react";
import HomePage from "./components/HomePage/Home";
import NavbarPage from "./pages/NavbarPage";
import FooterPage from "./pages/FooterPage";

const App = () => {
  return (
    <div>
      <NavbarPage />
      <HomePage />
      <FooterPage />
    </div>
  );
};

export default App;
