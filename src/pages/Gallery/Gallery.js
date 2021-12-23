import React from "react";
import "./Gallery.css";
import "./script.js";
import { useState } from "react";
import gambar1 from "./img/solo1.jpg";
import gambar2 from "./img/solo2.jpg";
import gambar3 from "./img/solo3.jpg";
import gambar4 from "./img/solo4.jpg";
import gambar5 from "./img/solo5.jpg";
import gambar6 from "./img/cirebon.jpeg";
import gambar7 from "./img/cirebon.jpg";
import gambar8 from "./img/cirebon2.jpg";
import gambar9 from "./img/cirebon3.jpg";
import gambar10 from "./img/cirebon4.jpg";
import gambar11 from "./img/pekalongan2.jpg";
import gambar12 from "./img/pekalongan3.jpg";
import gambar13 from "./img/pekalongan 1.jpg";
import gambar14 from "./img/pekalongan.jpg";
import gambar15 from "./img/pekalongan 2.jpg";
import gambar16 from "./img/pekalongan 3.jpg";

const Gallery = () => {
  // const [gambars] = useState([{image: {gambar1} }, {image: {gambar2} }, {image: {gambar3} }, {image: {gambar4} }, {image: {gambar5} }]);

  return (
    <div className="container containergallery">
      <center>
        <h1>Galeri Sentra Batik</h1>
      </center>
      <div class="gallery" id="gallery">
        <div class="gallery-item">
          <div class="content">
            <img src={gambar1} />

            {/* {gambars.map((gambarr) => (
              <img key={gambarr.image}/>
            ))} */}
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar2} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar3} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar4} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar5} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar6} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar7} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar8} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar9} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar10} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar11} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar12} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar13} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar14} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar15} />
          </div>
        </div>
        <div class="gallery-item">
          <div class="content">
            <img src={gambar16} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
