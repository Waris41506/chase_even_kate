import React, { useEffect, useState } from "react";
import "./Bitcoin.css";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineImportExport } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loader1 from "../assets/loader-1.webp";

const Bitcoin = () => {
  const [loader, setloader] = useState(true);
  const amount = localStorage.getItem("btcAmount") || "500";
  const btcName = localStorage.getItem("btcName") || "Junior Gunter";
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
      console.log("ok.....");
    }, 2000);
  }, []);

  return (
    <div className="bitcoin-con">
      {loader && (
        <div className="wrapper">
          <img src={loader1} alt="" />
        </div>
      )}

      <div className="bit-wit-box">
        <Link to={"/"}>
          <IoArrowBack size={25} className="aaa" />
        </Link>
        <p>Withdrawal Details</p>
        <MdOutlineImportExport size={25} />
      </div>
      <div className="sec-bit-box">
        <h5>Amount</h5>
        <h3 onClick={() => setOpenBox(true)}>
          ${amount} <span>BTC</span>
        </h3>
        <span className="sp">
          <FaInfoCircle size={16} />
          Awaiting Approval
        </span>
        <p>
          Additional fee was applied for activating your withdrawal to be able
          to send money from your bitcoin balance.
        </p>
        <span className="spp">why hasn't my withdrawal activate?</span>
      </div>
      <div className="down-bit-box">
        <div className="bit-info-box">
          <p>withdrawal wallet</p>
          <p>Bitcoin wallet</p>
        </div>
        <div className="bit-info-box">
          <p>Network</p>
          <p>BTC</p>
        </div>
        <div className="bit-info-box">
          <p>Status</p>
          <p>Pending</p>
        </div>
        <div className="bit-info-box">
          <p>Label</p>
          <p>{btcName}</p>
        </div>

        <p className="pp">Need help? View FAQs</p>
      </div>
    </div>
  );
};

export default Bitcoin;
