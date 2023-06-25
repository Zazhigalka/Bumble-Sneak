import React from "react";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import NotFoundPage from "../pages/NotFoundPage";
import Certificate from "../pages/certificate/Certificate";
import Blog from "../pages/blog/Blog";
import Auth from "../components/auth/Auth";
import ProductDetails from "../components/products/productDetails/ProductDetails";
import ProductMen from "../components/products/productGender/ProductMen";
import ProductWomen from "../components/products/productGender/ProductWomen";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 4,
    },
    {
      link: "/certificate",
      element: <Certificate />,
      id: 5,
    },
    {
      link: "/blog",
      element: <Blog />,
      id: 6,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 7,
    },
    {
      link: "/details/:id",
      element: <ProductDetails />,
      id: 8,
    },
    {
      link: "/men",
      element: <ProductMen />,
      id: 9,
    },
    {
      link: "/women",
      element: <ProductWomen />,
      id: 10,
    },
  ];

  // const menUrl =

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
