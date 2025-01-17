import React, { useState } from "react";
import "./MessageContent.css";
import logo from "../assets/Chase_logo_2007.svg.png";

const MessageContent = () => {
  const [info, setInfo] = useState({
    amount: "",
    name: "",
    date: "",
    Address: "",
    givingAmount: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInfo({ ...info, [name]: value });
  };

  const name = info.name || localStorage.getItem("name");

  const [paymentInfo, setPaymentInfo] = useState(false);
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
          <button className="btn-done" onClick={() => setPaymentInfo(false)}>
            Done
          </button>
        </div>
      )}
      <div className="img-box" onClick={() => setPaymentInfo(true)}>
        <img src={logo} alt="" />
      </div>
      <h4 className="this">PAYMENT APPROVED BY CHASE BANK</h4>
      <div className="message">
        <p>
          Hello Miss Evan we have approved the sum of ${info.givingAmount} you
          sent to <b>{name}</b> waiting for <b>${info.amount}</b> Activation
          Card from <b>{name}</b> to receive the payment instantly.
        </p>
        <p>
          Address : <span className="address">{info.Address}</span>
        </p>
        <p>Date : {info.date}</p>
        <h4>Power by Chase Bank</h4>
      </div>
      <h3 className="down-text">
        All transactions are been monitored ensure that there is no fraudulent
        activity
      </h3>
    </div>
  );
};

export default MessageContent;
