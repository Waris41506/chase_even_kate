import React from "react";
import "./FedEx.css";
import fedExLogo from "../assets/fedex-logo-1.jpg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const FedExPayment = () => {
  return (
    <div className="fedex-p-con">
      <nav>
        <Link to={"/"}>
          <img src={fedExLogo} alt="" />
        </Link>
        <div className="nav-icon-box">
          <FaRegUserCircle color="fff" size={28} />
          <IoMenuSharp color="fff" size={37} />
        </div>
      </nav>
      <div className="fedex-p">
        <img src={fedExLogo} alt="" />
        <div className="fedex-p-box">
          <h2>FROM</h2>
          <p>FedEx express</p>
          <p>FedEx office</p>
          <p>Fedexoffice554@gmail.com</p>
        </div>
        <h1>INVOICE</h1>
      </div>

      <div className="fedex-p-info">
        <div className="fedex-p-top-info">
          <h2>Delivery To</h2>
          <p>James Fenton</p>
          <p className="fedex-pp">919 So 7th QUINCY IL 62301</p>
        </div>
        <div className="fedex-p-top-info">
          <h3>INVOICE #</h3>
          <h3>CREATION DATE</h3>
          <h3>DUE DATE</h3>
        </div>
        <div className="fedex-p-top-info " id="fedex-p-top-info">
          <p>jff00467</p>
          <p>01/08/2025</p>
          <p>07/08/2025</p>
        </div>
      </div>
      <div className="fedex-p-blue-bg">
        <p id="pppp">DESCRIPTION</p>
        <p>FEE</p>
        <p>CLEARANCE</p>
        <p>AMOUNT</p>
      </div>
      <div className="fedex-p-blue-bg" id="fedex-p-blue-bg">
        <p id="pppp">Card delivery</p>
        <p>$100.00</p>
        <p>$100.00</p>
        <p>$300.00</p>
      </div>

      <div className="subtotal">
        <h2>PAYMENT METHOD</h2>
        <div className="subtotal--">
          <h2>SUBTOTAL</h2>
          <h2>$500.00</h2>
        </div>
      </div>
      <div className="subtotal">
        <h2>Bitcoin</h2>
        <div className="subtotal--" id="subtotal--">
          <h2>TOTAL</h2>
          <h2>$500.00</h2>
        </div>
      </div>
    </div>
  );
};

export default FedExPayment;
