import React, { useState } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";
const FAQ = () => {
  const [isClickedFAQ1, setIsClickedFAQ1] = useState(false);
  const [isClickedFAQ2, setIsClickedFAQ2] = useState(false);
  const [isClickedFAQ3, setIsClickedFAQ3] = useState(false);
  const [isClickedFAQ4, setIsClickedFAQ4] = useState(false);
  const [isClickedFAQ5, setIsClickedFAQ5] = useState(false);
  const [isClickedFAQ6, setIsClickedFAQ6] = useState(false);

  const handleClickFAQ1 = () => {
    setIsClickedFAQ1(!isClickedFAQ1);
    setIsClickedFAQ2(false);
    setIsClickedFAQ3(false);
    setIsClickedFAQ4(false);
    setIsClickedFAQ5(false);
    setIsClickedFAQ6(false);
  };

  const handleClickFAQ2 = () => {
    setIsClickedFAQ2(!isClickedFAQ2);
    setIsClickedFAQ1(false);
    setIsClickedFAQ3(false);
    setIsClickedFAQ4(false);
    setIsClickedFAQ5(false);
    setIsClickedFAQ6(false);
  };
  const handleClickFAQ3 = () => {
    setIsClickedFAQ3(!isClickedFAQ3);
    setIsClickedFAQ1(false);
    setIsClickedFAQ2(false);
    setIsClickedFAQ4(false);
    setIsClickedFAQ5(false);
    setIsClickedFAQ6(false);
  };
  const handleClickFAQ4 = () => {
    setIsClickedFAQ4(!isClickedFAQ4);
    setIsClickedFAQ1(false);
    setIsClickedFAQ2(false);
    setIsClickedFAQ3(false);
    setIsClickedFAQ5(false);
    setIsClickedFAQ6(false);
  };
  const handleClickFAQ5 = () => {
    setIsClickedFAQ5(!isClickedFAQ5);
    setIsClickedFAQ1(false);
    setIsClickedFAQ2(false);
    setIsClickedFAQ3(false);
    setIsClickedFAQ4(false);
    setIsClickedFAQ6(false);
  };
  const handleClickFAQ6 = () => {
    setIsClickedFAQ6(!isClickedFAQ6);
    setIsClickedFAQ1(false);
    setIsClickedFAQ2(false);
    setIsClickedFAQ3(false);
    setIsClickedFAQ4(false);
    setIsClickedFAQ5(false);
  };
  return (
    <div className="faq">
        <span className="faq__titles">
        <p className="faq__page-title">FAQ</p>
      <p className="faq__shipping_title">Shipping</p>
        </span>
   

      <div className="faq__container">
        <div className="faq__button_container">
          <button
            className={`faq__btns f-btn1 ${isClickedFAQ1 ? "clicked" : ""}`}
            onClick={handleClickFAQ1}
          >
            Order
          </button>
          {/* <Link to="/faq-shipping" className="faq__links"> */}
          <button
            className={`faq__btns f-btn2 ${isClickedFAQ2 ? "clicked" : ""}`}
            onClick={handleClickFAQ2}
          >
            Shipping
          </button>
          {/* </Link> */}
          <button
            className={`faq__btns f-btn3 ${isClickedFAQ3 ? "clicked" : ""}`}
            onClick={handleClickFAQ3}
          >
            Returns & Refunds
          </button>
          <button
            className={`faq__btns f-btn4 ${isClickedFAQ4 ? "clicked" : ""}`}
            onClick={handleClickFAQ4}
          >
            Payment
          </button>
          <button
            className={`faq__btns f-btn5 ${isClickedFAQ5 ? "clicked" : ""}`}
            onClick={handleClickFAQ5}
          >
            Promotions
          </button>
          <button
            className={`faq__btns f-btn6 ${isClickedFAQ6 ? "clicked" : ""}`}
            onClick={handleClickFAQ6}
          >
            Contact
          </button>
        </div>

        <div className="faq__shipping_container">
          <ul className="faq__shipping_ul">
            <li className="faq__shipping_li faq__questions">
              Where does bumble sneak ship from?
            </li>
            <li className="faq__shipping_li faq__answers">
              All of our items are shipped from our warehouse in Lijnden, the
              Netherlands.
            </li>
            <li className="faq__shipping_li faq__questions">
              Do you ship to my country and what are the shipping costs?
            </li>
            <li className="faq__shipping_li faq__answers">
              We’re happy to say that we ship to almost all countries worldwide!
              During checkout there’s an overview of which countries we ship to,
              including shipping costs. Here’s a quick indication of shipping
              costs, please don’t hesitate to contact us for more information.
              All orders within the Netherlands, Germany, Belgium and France are
              free of charge!
            </li>
            <li className="faq__shipping_li faq__questions">
              What carrier service will deliver my order?
            </li>
            <li className="faq__shipping_li faq__answers">
              Your order will be shipped by PostNL. Once your order arrives in
              the country of destination, a local carrier will take care of your
              order. You can track your order by using the Track & Trace-link
              you have received by email. Didn’t receive the Track & Trace-link?
              Please contact our Customer Care team. Pay €7.50 and PostNL will
              deliver your order the same day (this only applies to Dutch orders
              placed before 12:00). Please keep in mind that delivery will be
              made between 18:00 and 22:00. Amsterdam orders will be delivered
              by Emily Company. Orders placed before 14:00 will be delivered the
              same day. You will receive a text message with the estimated time
              of delivery.
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
