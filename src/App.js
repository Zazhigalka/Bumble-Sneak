import React from "react";
import NavbarPage from "./pages/NavbarPage";
import FooterPage from "./pages/FooterPage";
import ProductContextProvider from "./components/contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <NavbarPage />
      <ProductContextProvider>
        <MainRoutes />
      </ProductContextProvider>
      <FooterPage />
    </>
  );
};

export default App;
