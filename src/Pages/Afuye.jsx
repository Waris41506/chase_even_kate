import React from "react";
import "./Afuye.css";
import loader from "../assets/loader.gif";
import { MdIosShare } from "react-icons/md";

const Afuye = () => {
  return (
    <div className="afuye-page">
      <div className="afuye-con">
        <div className="afuye-top-box">
          <h2>Bank of America</h2>
        </div>
        <p className="p-error">Transfer On Pending... Approval Fee Needed.</p>
        <img src={loader} alt="" />

        <div className="afuye-details">
          {/* <div className="details-box"> */}
          <h3>Payment Details</h3>
          <div className="details-box-info">
            <div className="payment-info-p">
              <p>Payment to</p>
              <p>Brain Moriarty</p>
            </div>
            <div className="payment-info-p">
              <p>Address </p>
              <p className="p-add">
                129 greenwood ave, <br /> madison nj 07940
              </p>
            </div>
            <div className="payment-info-p">
              <p>Account </p>
              <p>Bank of America</p>
            </div>
            <div className="payment-info-p">
              <p>Amount </p>
              <p>$3,000,000</p>
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
          {/* </div> */}
        </div>
        <p className="p-infoo">
          We are currently waiting for the Approval fee of $2,500 to be paid in
          order to release the funds to Brain Moriarty.
        </p>
      </div>
      <p className="p-receipt">
        {" "}
        <MdIosShare size={20} /> Share and Save Receipt
      </p>
    </div>
  );
};

export default Afuye;
