import React from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {

  React.useEffect(() => {
    console.log("myfunc");
//    myfunc();
  }, []);

  return (

<div>
  {/* ======= Header ======= */}
  <header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span>Sakaiine</span>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#products">Products</a></li>          
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          {/* <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li> */}
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">株式会社 Sakaiine</h1>
          <h2 data-aos="fade-up" data-aos-delay={400}>IT技術で地域に貢献します。</h2>
          <div data-aos="fade-up" data-aos-delay={600}>
            <div className="text-center text-lg-start">
              <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Get Started</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
          <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
            <div className="content">
              <h3>我々は</h3>
              <h2>愛知県名古屋市から</h2>
              <p>
                プロジェクト管理、システム開発、ソフトウェア開発、通訳・翻訳サービス（英語）を提供します。
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
    {/* ======= Product Section ======= */}
    <section id="products" className="pricing">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Our Product</h2>
          <p>無料で利用できるWebサービスを公開中</p>
        </header>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="box">
              <img src="assets/img/values-1.png" className="img-fluid" alt="" />
              <h3>Sakaiine Standard</h3>
              <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
              <a href="#" className="btn-buy">Try Now</a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={400}>
            <div className="box">
              <img src="assets/img/values-2.png" className="img-fluid" alt="" />
              <h3>Sakaiine Pro</h3>
              <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
              <a href="#" className="btn-buy">Try Now</a>              
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Values Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Our Services</h2>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-box blue">
              <i className="ri-discuss-line icon" />
              <h3>システム開発支援</h3>
              <p>アーキテクチャー設計から運用支援まで一貫して行います。</p>
              {/* <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-box orange">
              <i className="ri-discuss-line icon" />
              <h3>クラウド活用支援</h3>
              <p>AWS, Azure
              </p>
              {/* <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="service-box green">
              <i className="ri-discuss-line icon" />
              <h3>オフショア開発支援<br />(英語)</h3>
              <p>英語でのオフショア開発支援を行います。</p>
              {/* <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="service-box red">
              <i className="ri-discuss-line icon" />
              <h3>通訳・翻訳サービス<br />(英語・トルコ語)</h3>
              <p>英語・トルコ語でのIT関連の通訳・翻訳を行います。</p>
              {/* <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-geo-alt" />
                  <h3>Address</h3>
                  <p>A108 Adam Street,<br />New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-telephone" />
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-envelope" />
                  <h3>Email Us</h3>
                  <p>info@example.com<br />contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-clock" />
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-6">
      <form action="forms/contact.php" method="post" class="php-email-form">
        <div class="row gy-4">

          <div class="col-md-6">
            <input type="text" name="name" class="form-control" placeholder="Your Name" required>
          </div>

          <div class="col-md-6 ">
            <input type="email" class="form-control" name="email" placeholder="Your Email" required>
          </div>

          <div class="col-md-12">
            <input type="text" class="form-control" name="subject" placeholder="Subject" required>
          </div>

          <div class="col-md-12">
            <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
          </div>

          <div class="col-md-12 text-center">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>

    </div> */}
        </div>
      </div>
    </section>{/* End Contact Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="" />
              <span>Sakaiine</span>
            </a>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            {/* <div class="social-links mt-3">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div> */}
          </div>
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      {/* <div class="copyright">
  &copy; Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
</div> */}
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>{/* End Footer */}
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div>

  );
}

export default App;
