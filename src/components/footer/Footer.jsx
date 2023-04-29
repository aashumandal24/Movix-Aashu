import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="infoText">
                <li><a href="#">Get the Movix App</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Site Index</a></li>
                <li><a href="#">MovixPro</a></li>
                <li><a href="#">Movix Developer</a></li>
            </ul>
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
            </ContentWrapper>
            <div className="socialIcons">
                <span className="icon">
                    <FaInstagram />
                </span>
                <span className="icon">
                    <FaTwitter />
                </span>
                <span className="icon">
                    <FaFacebookF />
                </span>
                <span className="icon">
                    <FaLinkedin />
                </span>
            </div>
            <div className="copyright">
                © 2023 by Movix.com, Inc.Aashu
            </div>

        </footer>
    );
};

export default Footer;