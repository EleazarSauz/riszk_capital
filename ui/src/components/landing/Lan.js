import React, { Component } from "react";
import firebase from "firebase";
import "./landing.css";

class Lan extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  render() {
    return <div className="App">
        <nav className="navbar navbar-expand-lg fixed-top navbar-shrink" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="http://themes.startbootstrap.com/vitality-v2.2.0/video.html#page-top">
              <img className="img-fluid" src="./Vitality - Multipurpose Bootstrap 4 One Page Theme_files/logo.svg" alt="" />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">
                    Demo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">
                    ¿Cómo Empezar?
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#pricing">
                    Comiciones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Comentarios
                  </a>
                </li>
                <li className="nav-item">
                  <button onClick={this.handleAuth} className="nav-link active">
                    Iniciar sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead video">
          <div className="overlay" />
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="mp4/.mp4" type="video/mp4" />
          </video>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 my-auto text-center text-white">
                <img className="masthead-img img-fluid mb-3" src="./Vitality - Multipurpose Bootstrap 4 One Page Theme_files/profile.svg" alt="" />
                <div className="masthead-title">Riszk Capital</div>
                <hr className="colored" />
                <div className="masthead-subtitle">
                  La fintech que democratiza las inversiones{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <a className="btn js-scroll-trigger" href="#about">
              <i className="fa fa-angle-down fa-fw" />
            </a>
          </div>
        </header>

        <section className="page-section" id="about">
          <div className="container-fluid">
            <div className="wow fadeIn text-center" style={{ visibility: "visible", animationName: "fadeIn" }}>
              <h1>nosotros</h1>
              <p className="mb-0">
                Nuestra pltaforma se sustenta en:
              </p>
            </div>
            <hr className="colored" />
            <div className="row text-center">
              <div className="col-lg-3 col-md-6">
                <div className="wow fadeIn px-4 pb-4 pb-lg-0 h-100" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeIn" }}>
                  <i className="fa fa-edit fa-4x" />
                  <h3>Cinfiabilidad del 99.9%</h3>
                  <p className="mb-0">
                    Nuestro modelo predictivo tiene una alta tasa de
                    confiabilidad en cuanto a los resultados
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="wow fadeIn px-4 pb-4 pb-lg-0 h-100" data-wow-delay=".4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeIn" }}>
                  <i className="fa fa-code fa-4x" />
                  <h3>Basado en machine learning</h3>
                  <p className="mb-0">
                    Se encarga en tomar por ti las mejores decisiones en
                    cuanto a tus equipos y jugadores favoritos; cuando y
                    cuanto jugar para ganar
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="wow fadeIn px-4 pb-4 pb-lg-0 h-100" data-wow-delay=".6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeIn" }}>
                  <i className="fa fa-tablet fa-4x" />
                  <h3>Mercado de apuestas: 29.95 MMD</h3>
                  <p className="mb-0">
                    Sólo durante 2010, las apuestas deportivas por internet
                    ascendieron a US$ 29.950 millones, según estimaciones de
                    la consultora H2 Gambling Capital
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="wow fadeIn px-4 h-100" data-wow-delay=".8s" style={{ visibility: "visible", animationDelay: "0.8s", animationName: "fadeIn" }}>
                  <i className="fa fa-heart fa-4x" />
                  <h3>Pasión por el deporte</h3>
                  <p className="mb-0">
                    Los aficionados al deporte estamos dispuestos a jugarlo
                    todo por nuestro equipo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-light" id="team">
          <iframe width="100%" height="480" src="https://demo_chart.tradingview.com/m.html?lang=es" frameborder="0" allowfullscreen />
        </section>

        <section className="call-to-action" style={{ backgroundImage: "url( img/agency/backgrounds/bg-quote.jpg )" }}>
          <div className="container wow fadeIn" style={{ visibility: "visible", animationName: "fadeIn" }}>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <span className="quote">
                  Acercamos las
                  <span className="text-primary"> inversiones </span>
                  a un mercado completamente
                  <span className="text-primary"> nuevo</span>
                  , de una forma completamente
                  <span className="text-primary"> disruptiva</span>.
                </span>
                <hr className="colored" />
                <a className="btn btn-primary js-scroll-trigger" href="#x|">
                  Invierte
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section services" id="services">
          <div className="container">
            <div className="text-center wow fadeIn" style={{ visibility: "visible", animationName: "fadeIn" }}>
              <h2>¿Cómo empezar?</h2>
              <hr className="colored" />
              <br />
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 wow fadeIn" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeIn" }}>
                <div className="media">
                  <div className="pull-left">
                    <i className="fa fa-clipboard rounded-circle" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Busca</h3>
                    <p>
                      a tus equipos y jugadores favoritos en la plataforma
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 wow fadeIn" data-wow-delay=".4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeIn" }}>
                <div className="media">
                  <div className="pull-left">
                    <i className="fa fa-pencil rounded-circle" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Análiza</h3>
                    <p>los ultimos resultados y su desempeños historico</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 wow fadeIn" data-wow-delay=".6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeIn" }}>
                <div className="media">
                  <div className="pull-left">
                    <i className="fa fa-rocket rounded-circle" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Fondea</h3>
                    <p>
                      transfiere a tu cuenta y empieza a generar ganacias
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-light" id="work">
          <div className="container text-center wow fadeIn" style={{ visibility: "visible", animationName: "fadeIn" }}>
            <h2>
              Para los que quieren llevar la pasión por el deporte a un
              nuevo nivel
            </h2>
            <hr className="colored" />
            <p>Inversiones con alto rendimiento</p>
          </div>
        </section>

        <section className="page-section pricing" id="pricing" style={{ backgroundImage: "url( img/agency/backgrounds/bg-pricing.jpg )" }}>
          <div className="container wow fadeIn" style={{ visibility: "visible", animationName: "fadeIn" }}>
            <div className="text-center">
              <h2>Comiciones</h2>
              <hr className="colored" />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="pricing-item featured-first">
                  <h3>Basic</h3>
                  <hr className="colored" />
                  <div className="price">
                    <span className="number">
                      <sup>$</sup>25
                    </span>
                    / month
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item">60 Users</li>
                    <li className="list-group-item">Unlimited Forums</li>
                    <li className="list-group-item">Unlimited Reports</li>
                    <li className="list-group-item">
                      3,000 Entries per Month
                    </li>
                    <li className="list-group-item">200 MB Storage</li>
                    <li className="list-group-item">Unlimited Support</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="pricing-item featured">
                  <h3>Plus</h3>
                  <hr className="colored" />
                  <div className="price">
                    <span className="number">
                      <sup>$</sup>50
                    </span>
                    / month
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item">60 Users</li>
                    <li className="list-group-item">Unlimited Forums</li>
                    <li className="list-group-item">Unlimited Reports</li>
                    <li className="list-group-item">
                      3,000 Entries per Month
                    </li>
                    <li className="list-group-item">200 MB Storage</li>
                    <li className="list-group-item">Unlimited Support</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="pricing-item featured-last">
                  <h3>Premium</h3>
                  <hr className="colored" />
                  <div className="price">
                    <span className="number">
                      <sup>$</sup>150
                    </span>
                    / month
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item">60 Users</li>
                    <li className="list-group-item">Unlimited Forums</li>
                    <li className="list-group-item">Unlimited Reports</li>
                    <li className="list-group-item">
                      3,000 Entries per Month
                    </li>
                    <li className="list-group-item">200 MB Storage</li>
                    <li className="list-group-item">Unlimited Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section signup-form bg-inverse text-white">
          <div className="container text-center">
            <h3 className="m0">Subscribe al newsletter!</h3>
            <hr className="colored" />
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div id="mc_embed_signup">
                  <form role="form" action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate="novalidate">
                    <div className="input-group input-group-lg">
                      <input type="email" name="EMAIL" className="form-control" id="mce-EMAIL" placeholder="Correo..." />
                      <span className="input-group-btn">
                        <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary">
                          Subscribir
                        </button>
                      </span>
                    </div>
                    <div id="mce-responses">
                      <div className="response" id="mce-error-response" style={{ display: "none" }} />
                      <div className="response" id="mce-success-response" style={{ display: "none" }} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container wow fadeIn" style={{ visibility: "visible", animationName: "fadeIn" }}>
            <div className="text-center">
              <h2>Comentarios</h2>
              <hr className="colored" />
            </div>
            <div className="row mt-4">
              <div className="col-lg-8 mx-auto">
                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                  <div className="row control-group">
                    <div className="form-group col-12 floating-label-form-group controls">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder="Nombre" id="name" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="row control-group">
                    <div className="form-group col-12 floating-label-form-group controls">
                      <label>Email Address</label>
                      <input type="email" className="form-control" placeholder="Correo" id="email" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="row control-group">
                    <div className="form-group col-12 floating-label-form-group controls">
                      <label>Phone Number</label>
                      <input type="tel" className="form-control" placeholder="Télefono" id="phone" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="row control-group">
                    <div className="form-group col-12 floating-label-form-group controls">
                      <label>Message</label>
                      <textarea rows="5" className="form-control" placeholder="Mensaje" id="message" required="required" data-validation-required-message="Please enter a message." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="row">
                    <div className="form-group col-12">
                      <button type="submit" className="btn btn-secondary">
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <a className="btn btn-block btn-full-width" href="#">
          ¡Invierte Ahora!
        </a>

        <footer className="footer" style={{ backgroundImage: "url( https://images.unsplash.com/photo-1430877027050-6184f6f6b80e?ixlib=rb-0.3.5&s=bca93ef1da567dbc8bf35c5c0bf16111&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb )" }}>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-4 footer-contact-details">
                <h4>
                  <i className="fa fa-phone" />
                  Call
                </h4>
                <p>551-234-5678</p>
              </div>
              <div className="col-md-4 footer-contact-details">
                <h4>
                  <i className="fa fa-map-marker" />
                  Visit
                </h4>
                <p>Ciudad de México</p>
              </div>
              <div className="col-md-4 footer-contact-details">
                <h4>
                  <i className="fa fa-envelope" />
                  Email
                </h4>
                <p>
                  <a href="mailto:mail@example.com">
                    mail@riszkcapital.com
                  </a>
                </p>
              </div>
            </div>
            <div className="row footer-social">
              <div className="col-lg-12">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://facebook.com/">
                      <i className="fa fa-facebook fa-fw fa-2x" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter fa-fw fa-2x" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://linkedin.com/">
                      <i className="fa fa-linkedin fa-fw fa-2x" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="copyright">© 2018 Riszk Capital</p>
          </div>
        </footer>
      </div>;
  }
}


export default Lan;