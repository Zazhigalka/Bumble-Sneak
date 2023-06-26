import React, { useState } from "react";
import "./PersonalAccount.css";


const  PersonalAccount = () => {
  const [isClickedPA1, setIsClickedPA1] = useState(false);
  const [isClickedPA2, setIsClickedPA2] = useState(false);
  const [isClickedPA3, setIsClickedPA3] = useState(false);
  const [isClickedPA4, setIsClickedPA4] = useState(false);
  const [isClickedPA5, setIsClickedPA5] = useState(false);
  const [isClickedPA6, setIsClickedPA6] = useState(false);

  const handleClickPA1 = () => {
    setIsClickedPA1(!isClickedPA1);
    setIsClickedPA2(false);
    setIsClickedPA3(false);
    setIsClickedPA4(false);
    setIsClickedPA5(false);
    setIsClickedPA6(false);
  };

  const handleClickPA2 = () => {
    setIsClickedPA2(!isClickedPA2);
    setIsClickedPA1(false);
    setIsClickedPA3(false);
    setIsClickedPA4(false);
    setIsClickedPA5(false);
    setIsClickedPA6(false);
  };
  const handleClickPA3 = () => {
    setIsClickedPA3(!isClickedPA3);
    setIsClickedPA1(false);
    setIsClickedPA2(false);
    setIsClickedPA4(false);
    setIsClickedPA5(false);
    setIsClickedPA6(false);
  };
  const handleClickPA4 = () => {
    setIsClickedPA4(!isClickedPA4);
    setIsClickedPA1(false);
    setIsClickedPA2(false);
    setIsClickedPA3(false);
    setIsClickedPA5(false);
    setIsClickedPA6(false);
  };
  const handleClickPA5 = () => {
    setIsClickedPA5(!isClickedPA5);
    setIsClickedPA1(false);
    setIsClickedPA2(false);
    setIsClickedPA3(false);
    setIsClickedPA4(false);
    setIsClickedPA6(false);
  };
  const handleClickPA6 = () => {
    setIsClickedPA6(!isClickedPA6);
    setIsClickedPA1(false);
    setIsClickedPA2(false);
    setIsClickedPA3(false);
    setIsClickedPA4(false);
    setIsClickedPA5(false);
  };
  return (
    <div className="personal-account">
        <span className="pa__titles">
        <p className="pa__title">Welcome</p>
      <p className="pa__acc-details_title">Account Details</p>
        </span>
   

      <div className="pa__container">
        <div className="pa__button_container">
          <button
            className={`pa__btns pa-btn1 ${isClickedPA1 ? "clicked" : ""}`}
            onClick={handleClickPA1}
          >
            Dashboard
          </button>
          <button
            className={`pa__btns pa-btn2 ${isClickedPA2 ? "clicked" : ""}`}
            onClick={handleClickPA2}
          >
            Account details
          </button>

          <button
            className={`pa__btns pa-btn3 ${isClickedPA3 ? "clicked" : ""}`}
            onClick={handleClickPA3}
          >
            Orders
          </button>
          <button
            className={`pa__btns pa-btn4 ${isClickedPA4 ? "clicked" : ""}`}
            onClick={handleClickPA4}
          >
            Return notices
          </button>
          <button
            className={`pa__btns pa-btn5 ${isClickedPA5 ? "clicked" : ""}`}
            onClick={handleClickPA5}
          >
            Address book
          </button>
          <button
            className={`pa__btns pa-btn6 ${isClickedPA6 ? "clicked" : ""}`}
            onClick={handleClickPA6}
          >
            Log out
          </button>
        </div>

        <div className="pa__acc-details_container">
            <p className="pa__acc-details_titles pa-title1">First name</p>
            <input type="text" className="pa__acc-details_inputs" />

            <p className="pa__acc-details_titles">Last name</p>
            <input type="text" className="pa__acc-details_inputs" />

            <p className="pa__acc-details_titles">Email address</p>
            <input type="text" className="pa__acc-details_inputs" />

            <p className="pa__acc-details_titles">Phone number</p>
            <input type="text" className="pa__acc-details_inputs" />

            <p className="pa__acc-details_titles">Your size</p>
            <select name="" id="" className="pa__acc-details_select">
                <option selected value="" className="pa__acc-details_options pa__ad_option1">Select your size</option>
                <option value="">35</option>
                <option value="">36</option>
                <option value="">37</option>
                <option value="">38</option>
                <option value="">39</option>
                <option value="">40</option>
                <option value="">41</option>
                <option value="">42</option>
                <option value="">43</option>
                <option value="">44</option>
                <option value="">45</option>
            </select>
            <button className="pa_acc-details_btn">Edit</button>

        </div>
      </div>
    </div>
  );
};

export default PersonalAccount;



