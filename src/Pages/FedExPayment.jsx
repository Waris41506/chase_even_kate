import React, { useState } from "react";
import "./FedEx.css";
import fedExLogo from "../assets/fedex-logo-1.jpg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const FedExPayment = () => {
  const [showForm, setShowForm] = useState(false);
  const [cName, setCname] = useState("");
  const [pMethod, setPmethod] = useState("");
  const [descrition, setDescrition] = useState("");
  const [send, setSend] = useState("");
  const [delivery, setDelivery] = useState("");
  const address = localStorage.getItem("address") || "Rock Hills, NC US";

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
      {showForm && (
        <div className="form-box">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setCname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Payment method"
            onChange={(e) => setPmethod(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrition"
            onChange={(e) => setDescrition(e.target.value)}
          />
          <input
            type="text"
            placeholder="Send date"
            onChange={(e) => setSend(e.target.value)}
          />
          <input
            type="text"
            placeholder="delivery date"
            onChange={(e) => setDelivery(e.target.value)}
          />
          <button onClick={() => setShowForm(false)}>Done</button>
        </div>
      )}
      <div className="fedex-p">
        <img src={fedExLogo} alt="" />
        <div className="fedex-p-box">
          <h2>FROM</h2>
          <p>FedEx express</p>
          <p>FedEx office</p>
          <p>Fedexoffice554@gmail.com</p>
        </div>
        <h1 onClick={() => setShowForm(true)}>INVOICE</h1>
      </div>

      <div className="fedex-p-info">
        <div className="fedex-p-top-info">
          <h2>Delivery To</h2>
          <p>{cName}</p>
          <p className="fedex-pp">{address}</p>
        </div>
        <div className="fedex-p-top-info">
          <h3>INVOICE #</h3>
          <h3>CREATION DATE</h3>
          <h3>DUE DATE</h3>
        </div>
        <div className="fedex-p-top-info " id="fedex-p-top-info">
          <p>jff00467</p>
          <p>{send}</p>
          <p>{delivery}</p>
        </div>
      </div>
      <div className="fedex-p-blue-bg">
        <p id="pppp">DESCRIPTION</p>
        <p>FEE</p>
        <p>CLEARANCE</p>
        <p>AMOUNT</p>
      </div>
      <div className="fedex-p-blue-bg" id="fedex-p-blue-bg">
        <p id="pppp">{descrition}</p>
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
        <h2>{pMethod}</h2>
        <div className="subtotal--" id="subtotal--">
          <h2>TOTAL</h2>
          <h2>$500.00</h2>
        </div>
      </div>
    </div>
  );
};

export default FedExPayment;
