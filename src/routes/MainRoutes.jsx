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
import BlogDetailed from "../pages/blog/BlogDetailed";
import FAQ from "../pages/faq/FAQ";
import FAQshipping from "../pages/faq/FAQshipping";
import Payment from "../pages/payment/Payment";
import PaymentSuccess from "../pages/payment/PaymentSuccess";
import PersonalAccount from "../pages/personal account/PersonalAccount";
import Checkout from "../pages/checkout/Checkout";
import Cart from "../pages/cart/Cart";
import EditProductPage from "../pages/EditProductPage";

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
    {
      link: "/blogdetailed",
      element: <BlogDetailed />,
      id: 11,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 12,
    },
    {
      link: "/personal",
      element: <PersonalAccount />,
      id: 13,
    },
    {
      link: "/checkout",
      element: <Checkout />,
      id: 14,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 15,
    },
    {
      link: "/faq",
      element: <FAQ />,
      id: 16,
    },
    {
      link: "/faq-shipping",
      element: <FAQshipping />,
      id: 17,
    },
    {
      link: "/payment",
      element: <Payment />,
      id: 18,
    },
    {
      link: "/paymentsuccess",
      element: <PaymentSuccess />,
      id: 19,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 20,
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
