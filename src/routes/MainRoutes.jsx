import React from "react";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import NotFoundPage from "../pages/NotFoundPage";
import Certificate from "../pages/certificate/Certificate";
import Blog from "../pages/blog/Blog";
import BlogDetailed from "../pages/blog/BlogDetailed";
import FAQ from "../pages/faq/FAQ";
import FAQshipping from "../pages/faq/FAQshipping";
import Payment from "../pages/payment/Payment";
import PaymentSuccess from "../pages/payment/PaymentSuccess";

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
      element: <Blog/>,
      id: 6,
    },
    {
      link: "/blogdetailed",
      element: <BlogDetailed/>,
      id: 7,
    },
    {
      link: "/faq",
      element: <FAQ/>,
      id: 8,
    },
    {
      link: "/faq-shipping",
      element: <FAQshipping/>,
      id: 9,
    },
    {
      link: "/payment",
      element: <Payment/>,
      id: 10,
    },
    {
      link: "/paymentsuccess",
      element: <PaymentSuccess/>,
      id: 11,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
