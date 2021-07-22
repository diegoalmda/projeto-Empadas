import React from 'react';
import logo from '../../assets/img/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="info">
                    <div className="image-logo">
                        <img src={logo} alt="Logotipo" />
                    </div>
                    <div className="sac">
                        <h2>SAC</h2>
                        <p>sac@eempadas.com.br</p>
                        <p>Atendemos de Segunda a Sexta</p>
                        <p>Das 9h às 18hs</p>
                    </div>
                    <div className="social-icons">
                        <h2>Nos siga nas redes sociais</h2>
                        <Link to="/" className="icon-holder">
                            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                        </Link>            
                        <Link to="/" className="icon-holder">
                            <FontAwesomeIcon icon={faInstagramSquare} className="icon inst" />
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="footer-menu">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="active">
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="active">
                            Quem Somos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cardapio" exact activeClassName="active">
                            Cardápio
                            </NavLink>
                        </li>
                    </ul>
                </div>                
                <div className="copy">
                    <p>&copy; 2021 - E-empadas - Todos os direitos reservados. <br />Desenvolvido por Diego Almeida</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;