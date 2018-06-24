import React, { Component } from 'react';
import './Navbar.css'

class Sidebar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <div>
            <a href="#" className="nav-logo">
              Riszk Capital
            </a>
          </div>
          <ul className="nav-right">
            <li><a href="#" className="nav-right__link">Notificaciones</a></li>
            <li><a href="#" className="nav-right__link">Fondear</a></li>
            <li><a href="#" className="nav-right__link">Historial</a></li>
            <li><a href="#" className="nav-right__link">Cuenta</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Sidebar;