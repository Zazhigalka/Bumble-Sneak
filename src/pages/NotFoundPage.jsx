import React from "react";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <img
        className="notImg"
        src="https://uploads-ssl.webflow.com/5fb39592cb1bfc03c9f9b6d2/621df040156fa75470da4837_COBE_article_seo_title.jpg"
        alt=""
      />

      <button className="notBtn" onClick={goToHome}></button>
    </div>
  );
};

export default NotFoundPage;
