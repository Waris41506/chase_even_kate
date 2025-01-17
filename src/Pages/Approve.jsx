import React from "react";
import "./Approve.css";
import { RiInboxArchiveFill, RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineMail, MdArrowBackIos } from "react-icons/md";
import { IoReturnUpBackOutline, IoReturnUpForward } from "react-icons/io5";
import { FaAngleUp, FaRegStar } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import MessageContent from "../Component/MessageContent";
import { Link } from "react-router-dom";

import completed from "../assets/complatedLogo.png";

const Approve = () => {
  return (
    <div className="approve-con">
      <div className="top-icon-box">
        <span className="back-icon">
          <Link to={"/"}>
            <MdArrowBackIos />
          </Link>
        </span>
        <div className="top-icon-box-inner">
          <p>
            <RiInboxArchiveFill size={25} />
          </p>
          <p>
            <RiDeleteBin6Line size={25} />
          </p>
          <p>
            <MdOutlineMail size={25} />
          </p>
          <p>
            <HiDotsHorizontal />
          </p>
        </div>
      </div>
      <div className="content-header">
        <h3>
          Payment Approved!!! <span className="inbox-btn">Inbox</span>
        </h3>
        <p className="star-icon">
          <FaRegStar size={20} />
        </p>
      </div>
      <div className="from-chase">
        <div className="left-info">
          <h3 className="info">CB</h3>
          <p className="info-name">
            Chase Bank <span>1 min ago</span>
            <br />
            to me <FaAngleUp size={12} />
          </p>
        </div>
        <div className="right-info-icon-box">
          <p>
            <IoReturnUpBackOutline size={20} />
          </p>
          <p>
            <HiDotsHorizontal size={20} />
          </p>
        </div>
      </div>
      <MessageContent />
      <div className="done-img-box">
        <img src={completed} alt="" />
      </div>
      <div className="replay-box">
        <button>
          {" "}
          <IoReturnUpBackOutline size={20} /> Reply
        </button>
        <button>
          {" "}
          <IoReturnUpForward size={20} /> Forward
        </button>
      </div>
    </div>
  );
};

export default Approve;
