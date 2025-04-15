import React, { useState } from "react";
import "./FedEx.css";
import fedExLogo from "../assets/fedex-logo-1.jpg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const FedEx = () => {
  const [active, setActive] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [send, setSend] = useState("");
  const [delivery, setDelivery] = useState("");

  const address = localStorage.getItem("address") || "Rock Hills, NC US";

  return (
    <div className="fedex-con">
      <nav>
        <Link to={"/"}>
          <img src={fedExLogo} alt="" />
        </Link>
        <div className="nav-icon-box">
          <Link to={"/fedexpayment"}>
            <FaRegUserCircle color="fff" size={28} />
          </Link>
          <IoMenuSharp color="fff" size={37} />
        </div>
      </nav>

      {showForm && (
        <div className="form-box">
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

      <div className="fedex-home">
        <h3 onClick={() => setShowForm(true)}>GET STATUS UPDATES</h3>
        <div className="fedex-info">
          <div className="box-info big-box">
            <div className="info-b">
              <h4>FROM</h4>
              <p>Moreno Valley, CA US</p>
              <h5>label Created</h5>
              <p>{send} 8:22 AM</p>
            </div>
          </div>
          <div className="box-info">
            <span>PACKAGE RECEIVED BY FEDEX</span>
          </div>
          <div className="box-info">
            {active === 1 && (
              <div className="active-box">
                <FaRegArrowAltCircleRight color="#fff" size={35} />
              </div>
            )}
            <span onClick={() => setActive(1)}>IN TRANSIT</span>
          </div>
          <div className="box-info">
            {active === 2 && (
              <div className="active-box">
                <FaRegArrowAltCircleRight color="#fff" size={40} />
              </div>
            )}
            <span onClick={() => setActive(2)}>OUT FOR DELIVERY</span>
          </div>
          <div className="box-info big-box">
            <div className="info-b">
              <p className="big-p">TO</p>

              <p>{address}</p>
              <h5>Estimated delivery date :</h5>
              <p>{delivery} by end of day</p>
            </div>
          </div>
        </div>
      </div>
      <div className="down-info">
        <div className="left">
          <p>SELECT A TAB</p>
          <h2>Travel History</h2>
        </div>
        <IoIosArrowDown size={40} color="#444444e0" />
      </div>
      <div className="down-info">
        <div className="left">
          <p>TIME ZONE</p>
          <h2>Local Scan Time</h2>
        </div>
        <IoIosArrowDown size={40} color="#444444e0" />
      </div>
    </div>
  );
};

export default FedEx;
