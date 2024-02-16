import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';
import footer_logo from '../Assets/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>company</li>
                <li>products</li>
                <li>offices</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="footer-icons-container">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div className="footer-icons-container">
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr /> 
                <p>Copyright @ 2024-All Right Reserved</p>   
            </div>
        </div>
    );
}

export default Footer;
