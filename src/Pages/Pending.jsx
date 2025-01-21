import React from "react";
import "./Pending.css";
import logo from "../assets/Chase_logo_2007.svg.png";
import masterCard from "../assets/Mastercard-logo.svg.webp";
import loader from "../assets/loader.gif";
import transfer from "../assets/transfer.webp";
import { Link } from "react-router-dom";

const Pending = () => {
  const name = localStorage.getItem("name");
  const amount = localStorage.getItem("amount") || "2,500,000.00";
  const email = localStorage.getItem("email") || "gunter55@gmail.com";

  return (
    <div className="pending-con">
      <div className="pending-img-box">
        <img className="img-1" src={logo} alt="" />
        <img className="img-2" src={masterCard} alt="" />
      </div>
      <div className="loader-box">
        <p>Transfer On Pending....</p>
        <img src={loader} alt="" />
      </div>

      <p className="approval">Transfer On Pending... Approval Fee Needed.</p>
      <p className="sure">
        We are waiting for Activation fee from <b>{name}</b> to receive the
        payment instantly.{" "}
        {email === "gunter55@gmail.com"
          ? ""
          : `We will sent a notification to ${email} as soon
        as the payment is completed.`}
      </p>
      <div className="details-box">
        <h3>Payment Details</h3>
        <div className="details-box-info">
          <div className="payment-info-p">
            <p>Payment to</p>
            <p>{name}</p>
          </div>
          <div className="payment-info-p">
            <p>Account </p>
            <p>Chase bank</p>
          </div>
          <div className="payment-info-p">
            <p>Amount </p>
            <p>${amount}</p>
          </div>
          <div className="payment-info-p">
            <p>
              Confirmation <br /> Number{" "}
            </p>
            <p>
              Reference Number <br /> 205925202304198
            </p>
          </div>
        </div>
      </div>
      <p>
        <Link className="back-to-home" to={"/"}>
          Back to home{" "}
        </Link>
      </p>
      <img className="transfer" src={transfer} alt="" />
    </div>
  );
};

export default Pending;
