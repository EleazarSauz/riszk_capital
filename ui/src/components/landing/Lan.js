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
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">
                    Process
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#work">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger active" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <button onClick={this.handleAuth} className="App-btn">
                    Iniciar sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead video">
      <div className="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="mp4/.mp4" type="video/mp4"/>
      </video>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto text-center text-white">
            <img className="masthead-img img-fluid mb-3" src="./Vitality - Multipurpose Bootstrap 4 One Page Theme_files/profile.svg" alt=""/>
            <div className="masthead-title">Riszk Capital</div>
            <hr className="colored"/>
            <div className="masthead-subtitle">La fintech que democratiza las inversiones </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a className="btn js-scroll-trigger" href="http://themes.startbootstrap.com/vitality-v2.2.0/video.html#about">
          <i className="fa fa-angle-down fa-fw"></i>
        </a>
      </div>
    </header>

    <section className="page-section" id="about">
      <div className="container-fluid">
        <div className="wow fadeIn text-center" style={{visibility: 'visible', animationName: 'fadeIn'}}>
          <h1>A Theme for Creatives &amp; Agencies</h1>
          <p className="mb-0">Vitality is the perfect theme for a freelance professional or an agency.</p>
        </div>
        <hr className="colored"/>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6">
            <div className="wow fadeIn px-4 pb-4 pb-lg-0 h-100" data-wow-delay=".2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'}}>
              <i className="fa fa-code fa-4x"></i>
              <h3>Bootstrap 4</h3>
              <p className="mb-0">Unleash the power and flexibility of the newly released Bootstrap 4 when you choose Vitality! One framework, every device.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="wow fadeIn px-4 pb-4 pb-lg-0 h-100" data-wow-delay=".4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeIn'}}>
              <i className="fa fa-edit fa-4x"></i>
              <h3>Easy to Edit</h3>
              <p className="mb-0">Vitality is easy to edit and customize and includes SASS and LESS versions for deeper customization.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="wow fadeIn px-4 pb-4 pb-lg-0 h-100" data-wow-delay=".6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeIn'}}>
              <i className="fa fa-tablet fa-4x"></i>
              <h3>Responsive</h3>
              <p className="mb-0">In today's world where devices come in every shape and size, Vitality will responsively adapt to look great on any screen!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="wow fadeIn px-4 h-100" data-wow-delay=".8s" style={{visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeIn'}}>
              <i className="fa fa-heart fa-4x"></i>
              <h3>Built with Love</h3>
              <p className="mb-0">All themes by Start Bootstrap are crafted with care. Thank you for choosing Vitality and being a customer!</p>
            </div>
          </div>
        </div>
      </div>
    </section>


        
      </div>;
  }
}


export default Lan;