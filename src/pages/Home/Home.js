import React, { useEffect } from 'react'
import './Home.css';
import Aos from 'aos';
import 'aos/dist/aos';
import title from './homeimg.jpg';
import galeri from './galeri.png';
import peta from './peta.png';
import store from './store.png';
import teks from './teks.png';

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div class="container containerhome">
      <section class="banner_main">
        <div class="row d_flex">
          <div class="col-md-5 col-sm-12">
            <div class="text-bg">
              <h1 data-aos="fade-down" data-aos-delay="200">
                SELAMAT DATANG </h1>
              <h1 data-aos="fade-down" data-aos-delay="400">
                DI WEBSITE </h1>
              <h1 data-aos="fade-right" data-aos-delay="600">
                <span>
                  SENTRA BATIK INDONESIA </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="800">
                Temukan Motif Batik terbaik yang ada di Indonesia. <strong>
                  "klik Get Started" </strong>
                untuk memulai memilih kota penghasil batik dan temukan motif batik pilihanmu </p>
              <a href="" data-aos="fade-up" data-aos-delay="1000">Get Started</a>
            </div>
          </div>
          <div class="col-md-7 col-sm-12">
            <div class="text-img" data-aos="fade-left" data-aos-delay="1000">
              <figure>
                <img src={title} />
              </figure>
            </div>
          </div>
        </div>

      </section>
  <div id="service" class="Services">

    <div class="row">
      <div class="col-md-12">
        <div class="titlepage">
          <h2 data-aos="fade-left" data-aos-delay="200">
            Pelayanan Kami </h2>
          <p data-aos="fade-right" data-aos-delay="400">
            Kami memberikan informasi mengenai batik terbaik bagi para wisatawan baik lokal maupun internasional </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right" data-aos-delay="200">
        <div class="Services-box">
          <i>
            <img src={store} width='60px' height='60px' alt='#'/>
          </i>
          <h3>
            Rekomendasi Tempat penghasil batik </h3>
          <p>
            Kami mencantumkan beberapa penghasil/toko batik dibeberapa kota yang mempunyai motif batik tertentu </p>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-left" data-aos-delay="400">
        <div class="Services-box">
          <i>
            <img src={teks} width='60px' height='60px' alt='#' /> </i>
          <h3>
            Penjelasan Motif batik </h3>
          <p>
            Setiap kota yang mempunyai ciri khas batik tertentu mempunyai makna yang berbeda beda tiap motifnya </p>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right" data-aos-delay="600">
        <div class="Services-box">
          <i>
            <img src={peta} width='60px' height='60px' alt='#' /> </i>
          <h3>
            Denah lokasi </h3>
          <p>
            Setiap toko/penghasil batik sudah terintegrasi dengan Google Maps </p>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12" data-aos="fade-left" data-aos-delay="800">
        <div class="Services-box">
          <i>
            <img src={galeri} width='60px' height='60px' alt='#' /> </i>
          <h3>
            Gallery </h3>
          <p>
            Kami memberikan beberapa foto tempat wisata sebagai referensi lain selain kain batik </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
export default Home;