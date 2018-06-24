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
        <nav class="navbar navbar-expand-lg fixed-top navbar-shrink" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="http://themes.startbootstrap.com/vitality-v2.2.0/video.html#page-top">
              <img class="img-fluid" src="./Vitality - Multipurpose Bootstrap 4 One Page Theme_files/logo.svg" alt="" />
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fa fa-bars" />
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#team">
                    Team
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#services">
                    Process
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#work">
                    Work
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger active" href="#contact">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <button onClick={this.handleAuth} className="App-btn">
                    Iniciar sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header class="masthead video">
      <div class="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="mp4/.mp4" type="video/mp4"/>
      </video>
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-12 my-auto text-center text-white">
            <img class="masthead-img img-fluid mb-3" src="./Vitality - Multipurpose Bootstrap 4 One Page Theme_files/profile.svg" alt=""/>
            <div class="masthead-title">Riszk Capital</div>
            <hr class="colored"/>
            <div class="masthead-subtitle">La fintech que democratiza las inversiones </div>
          </div>
        </div>
      </div>
      <div class="scroll-down">
        <a class="btn js-scroll-trigger" href="http://themes.startbootstrap.com/vitality-v2.2.0/video.html#about">
          <i class="fa fa-angle-down fa-fw"></i>
        </a>
      </div>
    </header>


        
      </div>;
  }
}


export default Lan;