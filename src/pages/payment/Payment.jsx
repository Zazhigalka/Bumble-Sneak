import React, { useState } from "react";
import "./Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  
  const [cvv, setCvv] = useState("");

  const handleCvvChange = (e) => {
    const { value } = e.target;
    const formattedValue = value.replace(/\D/g, ""); // Удаляем все символы, кроме цифр
    setCvv(formattedValue);
  };

  const [expiry, setExpiry] = useState("");

  const handleExpiryChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatExpiry(value);
    setExpiry(formattedValue);
  };

  const formatExpiry = (value) => {
    // Удаляем все символы, кроме цифр
    const numericValue = value.replace(/\D/g, "");

    // Ограничиваем количество цифр до и после "/"
    const formattedValue = numericValue.replace(
      /^(\d{0,2})(\d{0,2}).*/,
      "$1/$2"
    );

    return formattedValue;
  };

  return (
    <div className="payment__container">
      <div className="payment">
        <div className="payment__info">
          <p className="payment__info_title">Card number</p>
          <input type="number" className="payment__info_inputs" />

          <p className="payment__info_title">Card holder</p>
          <input type="text" className="payment__info_inputs" />

          <p className="payment__info_title">Expiry date</p>
          <input
            type="text"
            className="payment__expiry_input"
            value={expiry}
            onChange={handleExpiryChange}
            placeholder="MM/YY"
          />
          <input
            type="text"
            className="payment__cvv_input"
            value={cvv}
            onChange={handleCvvChange}
            maxLength={3} // Ограничиваем максимальную длину ввода до 3 символов
            placeholder="CVV"
          />
          <br />
          <Link to="/paymentsuccess">
            <button className="payment__btn"
            >
              PAY
            </button>
          </Link>
          <p className="payment__text">Payment secured and provided</p>
          
        </div>
        <p className="payment__text_under">Payment methods</p>

      </div>
    </div>
  );
};

export default Payment;
