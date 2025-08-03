import React, { useState } from "react";
import "./MessageContent.css";
import logo from "../assets/Chase_logo_2007.svg.png";
import chaseLogo from "../assets/chase-bank-logo-04.png";
import axios from "axios";

const MessageContent = () => {
  const [info, setInfo] = useState({
    amount: "",
    name: "",
    date: "",
    Address: "",
    givingAmount: "",
    email: "",
  });
  const [paymentInfo, setPaymentInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const accName = localStorage.getItem("accName");

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = () => {
    setPaymentInfo(false);
    localStorage.setItem("address", info.Address);
  };

  const name = info.name || localStorage.getItem("name");

  const sendEmail = () => {
    setLoading(true);
    setSuccessMessage(""); // Reset success message on each new request
    setErrorMessage(""); // Reset error message on each new request

    // .post("http://localhost:4000/", info)
    axios
      .post("https://chase-even-kate-server.vercel.app/", info)
      .then((res) => {
        setLoading(false);
        setSuccessMessage("Email sent successfully!"); // Success feedback
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage("Failed to send email. Please try again later."); // Error feedback
      });
  };

  return (
    <div className="msg-content-con">
      {paymentInfo && (
        <div className="payment-info-box">
          <button className="btn-close" onClick={() => setPaymentInfo(false)}>
            Exit
          </button>

          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleInput}
            placeholder="Client Name"
          />
          <input
            type="text"
            name="email"
            value={info.email}
            onChange={handleInput}
            placeholder="Email"
          />
          <input
            type="text"
            name="amount"
            value={info.amount}
            onChange={handleInput}
            placeholder="Amount"
          />
          <input
            type="text"
            name="givingAmount"
            value={info.givingAmount}
            onChange={handleInput}
            placeholder="Giving Amount"
          />
          <input
            type="text"
            name="Address"
            value={info.Address}
            onChange={handleInput}
            placeholder="Address"
          />

          <input
            type="text"
            name="date"
            value={info.date}
            onChange={handleInput}
            placeholder="Date"
          />
          <button className="btn-done" onClick={handleSubmit}>
            Done
          </button>
        </div>
      )}
      <div className="img-box" onClick={() => setPaymentInfo(true)}>
        <img src={logo} alt="" />
      </div>
      <h4 className="this">PAYMENT APPROVED BY CHASE BANK</h4>
      <div className="message">
        <img src={chaseLogo} alt="" />
        <p>
          Hello Miss {accName}, we have successfully approved the{" "}
          <b>${info.givingAmount}</b> you sent to <b>{name}</b>. We are now
          awaiting the <b>${info.amount}</b> activation fee from <b>{name}</b>{" "}
          in order to release the payment instantly.
        </p>
        <p>
          Address: <span className="address">{info.Address}</span>
        </p>
        <p>Date: {info.date}</p>
        <p>
          Status <b>Pending</b>
        </p>
        <h4>Powered by Chase Bank</h4>
      </div>

      {!info.name ||
      !info.Address ||
      !info.amount ||
      !info.date ||
      !info.email ||
      !info.givingAmount ? (
        <h3 className="down-text">
          All transactions are being monitored to ensure there is no fraudulent
          activity.
        </h3>
      ) : (
        <h3 className="down-text" onClick={sendEmail}>
          All transactions are being monitored to ensure there is no fraudulent
          activity.
        </h3>
      )}

      {loading && <p>Sending email...</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default MessageContent;
