import React, { useState } from "react";
import "typeface-bebas-neue";
import "./Certificate.css";
import "typeface-montserrat";
import certificate1 from "./imgs/certificate1.png";
import certificate2 from "./imgs/certificate2.png";
import certificate3 from "./imgs/certificate3.png";
import certificate4 from "./imgs/certificate4.png";
import btn from "./imgs/btn1.png";
import visa from "./imgs/visa.webp";
import mastercard from "./imgs/mastercard.png";
import paypal from "./imgs/paypal.png";
import { useNavigate } from "react-router";

const Certificate = () => {
  const navigate = useNavigate();

  const [isClickedDesign1, setIsClickedDesign1] = useState(true);
  const [isClickedDesign2, setIsClickedDesign2] = useState(false);
  const [isClickedDesign3, setIsClickedDesign3] = useState(false);
  const [isClickedDesign4, setIsClickedDesign4] = useState(false);

  const handleClickDesign1 = () => {
    setIsClickedDesign1(!isClickedDesign1);
    setIsClickedDesign2(false);
    setIsClickedDesign3(false);
    setIsClickedDesign4(false);
  };

  const handleClickDesign2 = () => {
    setIsClickedDesign1(false);
    setIsClickedDesign2(!isClickedDesign2);
    setIsClickedDesign3(false);
    setIsClickedDesign4(false);
  };
  const handleClickDesign3 = () => {
    setIsClickedDesign1(false);
    setIsClickedDesign2(false);
    setIsClickedDesign3(!isClickedDesign3);
    setIsClickedDesign4(false);
  };
  const handleClickDesign4 = () => {
    setIsClickedDesign1(false);
    setIsClickedDesign2(false);
    setIsClickedDesign3(false);
    setIsClickedDesign4(!isClickedDesign4);
  };

  const [isClickedType1, setIsClickedType1] = useState(false);
  const [isClickedType2, setIsClickedType2] = useState(false);

  const handleClickType1 = () => {
    setIsClickedType1(!isClickedType1);
    setIsClickedType2(false);
  };

  const handleClickType2 = () => {
    setIsClickedType2(!isClickedType2);
    setIsClickedType1(false);
  };

  const [isClickedCard1, setIsClickedCard1] = useState(false);
  const [isClickedCard2, setIsClickedCard2] = useState(false);
  const [isClickedCard3, setIsClickedCard3] = useState(false);

  const handleClickCard1 = () => {
    setIsClickedCard1(!isClickedCard1);
    setIsClickedCard2(false);
    setIsClickedCard3(false);
  };

  const handleClickCard2 = () => {
    setIsClickedCard2(!isClickedCard2);
    setIsClickedCard1(false);
    setIsClickedCard3(false);
  };
  const handleClickCard3 = () => {
    setIsClickedCard3(!isClickedCard3);
    setIsClickedCard2(false);
    setIsClickedCard1(false);
  };

  return (
    <div className="certificate">
      <div className="certificate__title">
        <p
          className="certificate__text"
          style={{ fontFamily: "Bebas Neue", fontSize: "50px" }}
        >
          Giftcard from
        </p>
        <p
          className="certificate__name"
          style={{ fontFamily: "Bebas Neue", fontSize: "80px" }}
        >
          BUMBLE SNEAK
        </p>
      </div>
      <br />

      <div className="certificate__design">
        <p className="certificate__design" style={{ fontFamily: "Montserrat" }}>
          Choose the design
        </p>
        <ul className="certificate__design_ul">
          <li className="certificate__design_li">
            <img
              onClick={handleClickDesign1}
              className={`certificate__imgs c-img1 ${
                isClickedDesign1 ? "certificate__border" : ""
              }`}
              src={certificate1}
              alt=""
            />
          </li>
          <li className="certificate__design_li">
            <img
              onClick={handleClickDesign2}
              className={`certificate__imgs c-img2 ${
                isClickedDesign2 ? "certificate__border" : ""
              }`}
              src={certificate2}
              alt=""
            />
          </li>

          <li className="certificate__design_li">
            <img
              onClick={handleClickDesign3}
              className={`certificate__imgs c-img3 ${
                isClickedDesign3 ? "certificate__border" : ""
              }`}
              src={certificate3}
              alt=""
            />
          </li>

          <li className="certificate__design_li">
            <img
              onClick={handleClickDesign4}
              className={`certificate__imgs c-img4 ${
                isClickedDesign4 ? "certificate__border" : ""
              }`}
              src={certificate4}
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="certificate__about-and-value_container">
        <div className="certificate__details">
          <div className="certificate__value-details">
            <p className="certificate__value">Choose the giftcard value</p>
            <input className="certificate__amount_input" type="number" />
            <select className="certificate__currency" name="currency" id="">
              <option value="currency">USD</option>
              <option value="currency">EUR</option>
              <option value="currency">RUB</option>
              <option value="currency">KGS</option>
              <option value="currency">TRY</option>
            </select>
          </div>
          <div className="certificate__type-details">
            <p className="certificate__type">Choose the giftcard type</p>
            <div className="certificate__type_btns-container">
              <button
                onClick={handleClickType1}
                className="certificate__type_btn1 certificate__type_btns"
              >
                <div className="certificate__type_content">
                  <div
                    className={`certificate__type_circle t-circle1 ${
                      isClickedType1 ? "clicked" : ""
                    }`}
                  ></div>
                  <span className="certificate__type_text">
                    Digital giftcard
                    <br />
                    <span className="certificate__type_text-bold">
                      Printable PDF
                    </span>
                    <br />
                    Sent by email
                  </span>
                </div>
              </button>

              <button
                onClick={handleClickType2}
                className="certificate__type_btn2 certificate__type_btns"
              >
                <div className="certificate__type_content">
                  <div
                    className={`certificate__type_circle t-circle2  ${
                      isClickedType2 ? "clicked" : ""
                    }`}
                  ></div>
                  <span className="certificate__type_text">
                    Giftcard
                    <br />
                    <span className="certificate__type_text-bold">
                      {" "}
                      Card in a special gift box
                    </span>
                    <br />
                    Sent by post
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="certificate__email-details">
            <p className="certificate__email">Email address</p>
            <input
              className="certificate__email_input"
              type="email"
              name=""
              id=""
            />
          </div>

          <div className="certificate__payment-details">
            <p className="certificate__payment">Select a payment method</p>
            <div className="certificate__payment_btns-container">
              <button
                onClick={handleClickCard1}
                className="certificate__payment_btn1 certificate__payment_btns"
              >
                <div className="certificate__payment_content">
                  <div
                    className={`certificate__payment_circle p-circle1  ${
                      isClickedCard1 ? "clicked" : ""
                    }`}
                  ></div>
                  <img
                    className="certificate__payment_visa certificate__payment_cards"
                    src={visa}
                    alt=""
                  />
                  <span className="certificate__payment_text">Visa </span>
                </div>
              </button>

              <button
                onClick={handleClickCard2}
                className="certificate__payment_btn2 certificate__payment_btns"
              >
                <div className="certificate__payment_content">
                  <div
                    className={`certificate__payment_circle p-circle2  ${
                      isClickedCard2 ? "clicked" : ""
                    }`}
                  ></div>
                  <img
                    className="certificate__payment_mastercard certificate__payment_cards"
                    src={mastercard}
                    alt=""
                  />
                  <span className="certificate__payment_text">Mastercard </span>
                </div>
              </button>

              <button
                onClick={handleClickCard3}
                className="certificate__payment_btn3 certificate__payment_btns"
              >
                <div className="certificate__payment_content">
                  <div
                    className={`certificate__payment_circle p-circle3  ${
                      isClickedCard3 ? "clicked" : ""
                    }`}
                  ></div>
                  <img
                    className="certificate__payment_paypal certificate__payment_cards"
                    src={paypal}
                    alt=""
                  />
                  <span className="certificate__payment_text">Paypal </span>
                </div>
              </button>
            </div>
          </div>

          <div
            onClick={() => {
              navigate("/payment");
            }}
            style={{
              position: "relative",
              display: "inline-block",
              marginTop: "6rem",
            }}
          >
            <img className="certificate__btn" src={btn} alt="" />
            <h3
              className="buygif"
              style={{
                position: "absolute",
                top: "46%",
                left: "26%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontFamily: "Montserrat",
                fontSize: "22px",
                fontWeight: "400",
              }}
            >
              Buy the giftcard
            </h3>
          </div>
        </div>

        <div className="certificate__about">
          <p className="certificate__about_text">
            The Sneaker District giftcard is the ideal present for every
            sneakerhead. You can choose the value of the giftcard yourself, with
            a minimum value of € 10,-. Choose to send the giftcard as a PDF or a
            package.
            <br />
            <br />
            When you choose to send the giftcard as a PDF, you’ll receive the
            giftcard attached to an email. You can print or forward the
            giftcard.
            <br />
            <br />
            There’s also the option to receive the giftcard as a package! This
            will contain a credit card sized card in a special gift box. The
            card works with a combination of the barcode and the pin number on
            the back and can be used online and in-store.
            <br />
            <br />
            Please note: The package will be sent as a letterbox package, as a
            result delivery times may differ. We cannot ensure that the package
            will be delivered the next day.Good to know: Giftcards can be used
            for multiple purchases as long as there\'s still credit on the
            giftcard.It’s not possible to exchange a giftcard for cash.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
