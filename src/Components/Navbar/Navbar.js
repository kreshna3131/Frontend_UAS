import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import imgnavbar from "./navbar.png";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        {/* SentraBatik */}
        <img src={imgnavbar} width="90px" height="32px" />
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-home"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Solo" exact>
              <i class="far fa-building"></i>Solo
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Yogyakarta" exact>
              <i class="far fa-building"></i>Yogyakarta
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Cirebon" exact>
              <i class="far fa-building"></i>Cirebon
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Pekalongan" exact>
              <i class="far fa-building"></i>Pekalongan
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Gallery" exact>
              <i className="far fa-images"></i>Gallery
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/About" exact>
              <i className="fas fa-globe"></i>About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact" exact>
              <i className="far fa-address-card"></i>Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
