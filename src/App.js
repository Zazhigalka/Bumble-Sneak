import React from "react";
import NavbarPage from "./pages/NavbarPage";
import FooterPage from "./pages/FooterPage";
import ProductContextProvider from "./components/contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";
import AuthContextProvider from "./components/contexts/AuthContextProvider";
import CartContextProvider from "./components/contexts/CartContextProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <NavbarPage />
          <ProductContextProvider>
            <MainRoutes />
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
      <FooterPage />
    </>
  );
};

export default App;
