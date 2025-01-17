import React from "react";
import "./Pending.css";
import logo from "../assets/Chase_logo_2007.svg.png";
import masterCard from "../assets/Mastercard-logo.svg.webp";
import loader from "../assets/loader.gif";
import transfer from "../assets/transfer.webp";
import { Link } from "react-router-dom";

const Pending = () => {
  const name = localStorage.getItem("name");
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
      </p>
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
