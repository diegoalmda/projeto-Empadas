import React, { useContext } from 'react';
import logo from '../../assets/img/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartCount from '../CartCount';


function NavBar() {

  return (
    <div className="navBar">
      <nav className="navigation">
        <div className="logo">
          <img src={logo} alt="Logotipo" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/quem-somos" exact activeClassName="active">
              Quem Somos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cardapio" exact activeClassName="active">
              Cardápio
            </NavLink>
          </li>
          <CartCount />
        </ul>
        <div className="social-icons">
          <Link to="/" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>            
          <Link to="/" className="icon-holder">
            <FontAwesomeIcon icon={faInstagramSquare} className="icon inst" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;