import React, { useEffect, useState } from "react";
import "./Home.css";
import { CgProfile } from "react-icons/cg";
import { IoArrowBack } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";

const Home = () => {
  const [name, SetName] = useState(
    localStorage.getItem("name") || "Junior Gunter w"
  );
  const [time, SetTime] = useState(
    localStorage.getItem("time") || "1 minutes ago"
  );
  const [amount, SetAmount] = useState(
    localStorage.getItem("amount") || "2,500,000.00"
  );
  const [charges, SetCharges] = useState(
    localStorage.getItem("charges") || "17.59"
  );
  const [email, SetEmail] = useState(
    localStorage.getItem("email") || "gunter55@gmail.com"
  );

  const [paymentBox, setPaymentBox] = useState(false);
  const [login, setLogin] = useState(true);

  const username = "Evan_kate";
  let passCode;

  const handleChangeName = (e) => {
    SetName(e.target.value);
  };
  const handleChangeTime = (e) => {
    SetTime(e.target.value);
  };
  const handleChangeAmount = (e) => {
    SetAmount(e.target.value);
  };
  const handleChangeCharges = (e) => {
    SetCharges(e.target.value);
  };
  const handleChangeEmail = (e) => {
    SetEmail(e.target.value);
  };

  const submit = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("time", time);
    localStorage.setItem("amount", amount);
    localStorage.setItem("charges", charges);
    localStorage.setItem("email", email);

    setPaymentBox(false);
  };

  const navigate = useNavigate();
  const pending = () => {
    navigate("/pending");
  };
  const geterateCode = (e) => {
    e.preventDefault();
    setTimeout(() => {
      passCode = Math.floor(1000 + Math.random() * 9000);
      localStorage.setItem("PassCode", passCode);
      window.location.reload(true);
    }, 15000);
  };

  passCode = localStorage.getItem("PassCode");

  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, []);

  const logIn = (e) => {
    e.preventDefault();

    if (localStorage.getItem("isOk") === "true") {
      setLogin(false);

      // setTimeout(() => {
      //   localStorage.removeItem("PassCode");
      // }, 10000);
      return;
    }
  };

  const logout = () => {
    localStorage.setItem("isLogin", false);
    window.location.reload(true);
  };

  return (
    <div className="home-con">
      {login && (
        <Login
          login={logIn}
          passCode={passCode}
          username={username}
          geterateCode={geterateCode}
        />
      )}
      {paymentBox && (
        <div className="payment-box">
          <button className="btn-close" onClick={() => setPaymentBox(false)}>
            Exit
          </button>

          <input
            onChange={handleChangeName}
            type="text"
            placeholder="Client Name"
          />
          <input
            onChange={handleChangeEmail}
            type="text"
            placeholder="email.."
          />
          <input onChange={handleChangeTime} type="text" placeholder="Time" />
          <input
            onChange={handleChangeAmount}
            type="text"
            placeholder="Amount"
          />
          <input
            onChange={handleChangeCharges}
            type="text"
            placeholder="Charges"
          />
          <button className="btn-done" onClick={submit}>
            Done
          </button>
        </div>
      )}

      <div className="home-top-icon">
        <p>
          <IoArrowBack size={25} onClick={logout} />
        </p>

        <h4>Welcome Back, Evan</h4>
        <p>
          <Link to={"/approve"}>
            <CgProfile size={25} />
          </Link>
        </p>
      </div>
      <div className="top-box">
        <h4>CHASE SAVINGS {`(...1787)`}</h4>
        <h3 className="balance">
          $1,215,000,000.00 <br />{" "}
          <span className="av-balance">Available Balance</span>
        </h3>
        <div className="inner-box">
          <p>
            <Link className="aa" to={"/fedex"}>
              View activity
            </Link>{" "}
          </p>
          <p>View history</p>
          <p onClick={() => setPaymentBox(true)}>Payment</p>
        </div>
      </div>
      <div className="second-box">
        <h4>Account details</h4>
        <div className="available-box">
          <p>
            Available balance <FaInfoCircle />
          </p>
          <p>$1,215,000,000.00</p>
        </div>
        <div className="available-box">
          <p>
            Present balance <FaInfoCircle />
          </p>
          <p>$1,215,000,000.00</p>
        </div>
        <button className="show-details">Show details</button>
      </div>
      <div className="third-box">
        <h4>Recent transactions</h4>
        <div onClick={pending} className="transaction-box">
          <div className="box-1">
            <h4>{name}</h4>
            <p>{time}</p>
            <p>${amount}</p>
          </div>
          <div className="box-2">
            <p>-${charges}</p>
            <span className="span-c">Pending</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>David Kelly</h4>
            <p>1 week ago</p>
            <p>$2,500,000.00</p>
          </div>
          <div className="box-2">
            <p>-$17.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>REMOTE ONLINE DEPOSITE # 1</h4>
            <p>1 week ago</p>
            <p>$500.00</p>
          </div>
          <div className="box-2">
            <p>-$17.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>Charlie Whitby</h4>
            <p>1 week ago</p>
            <p>$75,000.00</p>
          </div>
          <div className="box-2">
            <p>-$9.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>William Henry</h4>
            <p>2 week ago</p>
            <p>$2,500,000.00</p>
          </div>
          <div className="box-2">
            <p>-$17.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>Phillip Costello</h4>
            <p>2 week ago</p>
            <p>$500,000.00</p>
          </div>
          <div className="box-2">
            <p>-$10.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>Brandon Hopkins</h4>
            <p>2 week ago</p>
            <p>$2,500,000.00</p>
          </div>
          <div className="box-2">
            <p>-$17.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>Dave Smith</h4>
            <p>3 week ago</p>
            <p>$20,000.00</p>
          </div>
          <div className="box-2">
            <p>-$5.39</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>Tony Zirs</h4>
            <p>3 week ago</p>
            <p>$2,500,000.00</p>
          </div>
          <div className="box-2">
            <p>-$17.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>Gerrard Mike</h4>
            <p>3 week ago</p>
            <p>$2,500,000.00</p>
          </div>
          <div className="box-2">
            <p>-$17.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>Ray Hannah</h4>
            <p>4 week ago</p>
            <p>$1,500,000.00</p>
          </div>
          <div className="box-2">
            <p>-$11.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
        <div className="transaction-box">
          <div className="box-1">
            <h4>Bell Chuck</h4>
            <p>4 week ago</p>
            <p>$2,500,000.00</p>
          </div>
          <div className="box-2">
            <p>-$17.59</p>
            <span className="span-c">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
