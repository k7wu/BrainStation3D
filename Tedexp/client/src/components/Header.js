import React from "react";
import logo from "../assets/Logo/TEDlogo.svg";
import slogan from "../assets/Logo/slogan.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <header className="header__main-container">
        <div className="header__logo-container">
          <Link to="/" className="header__logo-container--link">
            <img className="header__logo" src={logo} alt="" />
            <img className="header__slogan" src={slogan} alt="" />
          </Link>
        </div>
        <div className="header__link-container">
          <h1 className="header__link-container--text">WATCH</h1>
          <h1 className="header__link-container--text">DISCOVER</h1>
          <h1 className="header__link-container--text">ATTEND</h1>
          <h1 className="header__link-container--text">PARTICIPATE</h1>
          <h1 className="header__link-container--text">ABOUT</h1>
        </div>
      </header>
    </div>
  );
}
