import React from "react";
import "./Contact.css";
// import f from "./script.js";

const Contact = () => {
  return (
    <div className="container">
      <div id="loader"></div>
      <div id="content"></div>

      <div class="container containercontact">
        <h1 data-aos="zoom-out-up" data-aos-duration="2000">
          HUBUNGI KAMI{" "}
        </h1>
        <div class="row contactrow">
          <div class="col-xl-4 col-lg-6 col-md-12 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="card card1">
              <span>Bagas Aditya P.</span>
              <ul class="social-media-list">
                <li>
                  <a href="https://www.instagram.com/bagss.ap/">
                    <i class="fab fa-instagram" target="_blank"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f" target="_blank"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter" target="_blank"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-12 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div class="card card2">
              <span>Kreshna Putra A.W.</span>
              <ul class="social-media-list">
                <li>
                  <a href="https://github.com/kreshna3131" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCMGG3tewudLY57pESaGhUiw" target="_blank">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/kreshnaputraaw?utm_medium=copy_link" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/kreshnaputra.adiwicaksana" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://line.me/ti/p/jZHUFjxwoG" target="_blank">
                    <i class="fab fa-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-12 col-md-12 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
            <div class="card card3">
              <span>Ivan Fausta D.</span>
              <ul class="social-media-list">
                <li>
                  <a href="https://www.instagram.com/ivanfaustadinata/">
                    <i class="fab fa-instagram" target="_blank"></i>
                  </a>
                </li>
                <li>
                  <a href="https://m.facebook.com/profile.php">
                    <i class="fab fa-facebook-f" target="_blank"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/home">
                    <i class="fab fa-twitter" target="_blank"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
