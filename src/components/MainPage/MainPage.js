import React from "react";
import "./MainPage.css";
import Logo from "../Logo/Logo";

const MainPage = () => {
  return (
    <div className="container">


      <div className="left-div">
        <Logo />

        <div className="left-content">
          <div className="we-are">We're</div>
          <div className="coming-soon">
            coming<br></br> soon
          </div>

          <div className="description">
            Hello fellow shoppers! We're currently building our new <br></br>
            fashion store. Add your email below to stay up-to-date with<br></br>
            announcements and our launch deals.
          </div>

          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit">
              <img src={`${process.env.PUBLIC_URL}/images/icon-arrow.svg`} />
            </button>
          </form>
        </div>

      </div>


      <div className="right-div">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero-desktop.jpg`}
          alt="submit-button"
        />
      </div>
    </div>
  );
};

export default MainPage;
