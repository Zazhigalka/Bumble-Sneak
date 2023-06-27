import React from "react";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  return (
    <div className="paymentSuccess__container">
      <div className="paymentSuccess">
        <div className="paymentSuccess__info">
          <p className="paymentSuccess__info_title">
            Your order has been accepted!
            <br />
            Expect a message :)
          </p>

          <a href="/">
            <button className="paymentSuccess__btn">OK</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
