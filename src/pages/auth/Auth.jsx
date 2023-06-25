import React from "react";
import "./Auth.css";
import authtbtn from "./imgs/auth-btn.png";

const Auth = () => {
  return (
    <div className="auth__container">
      <div className="auth">
        <div className="auth__info">
          <div className="auth__info_left">
            <p className="auth__info_title">Email address</p>
            <input type="email" className="auth__info_inputs" />

            <p className="payment__info_title">Password</p>
            <input
              type="text"
              className="auth__info_inputs auth__info_input2"
            />
          </div>
          <div className="auth__info_right">
            <ul className="auth__info_right-ul">
              <li className="auth__info_right-li air-li-1">
                Save your favorite products to your personal wishlist
              </li>
              <li className="auth__info_right-li air-li-2">
                Manage all your orders and returns in one place
              </li>
              <li className="auth__info_right-li air-li-3">
                Order faster with your saved address details
              </li>
            </ul>
          </div>
        </div>
        <img src={authtbtn} alt="" className="auth__btn" />
        <p className="auth__login-text">Or</p>
        <div className="auth__btns_container">
          <button className="auth__btns a-btn1">Google</button>
          <button className="auth__btns a-btn2">Facebook</button>
          
          <div className="auth__account_texts-container">
            <span className="auth__account_texts12">
              <p className="auth__account-texts aa-text1">
                Don’t have an account?
              </p>
              <p className="auth__account-texts aa-text2"> Sign up</p>
            </span>
            <p className="auth__account-texts aa-text3">Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
