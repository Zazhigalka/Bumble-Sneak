import React from "react";
import NavbarPage from "./pages/NavbarPage";
import FooterPage from "./pages/FooterPage";
import ProductContextProvider from "./components/contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";
import AuthContextProvider from "./components/contexts/AuthContextProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <NavbarPage />
        <ProductContextProvider>
          <MainRoutes />
        </ProductContextProvider>
      </AuthContextProvider>
      <FooterPage />
    </>
  );
};

export default App;
