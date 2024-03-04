/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import custom styles for the footer

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <h5 className="footer-heading">About Us</h5>
                        <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.</p>
                    </div>
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <h5 className="footer-heading">Contact</h5>
                        <p className="footer-text">Email: example@example.com</p>
                        <p className="footer-text">Phone: +1234567890</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5 className="footer-heading">Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" className="social-icon-link"><FaFacebookF className="social-icon" /></a>
                            <a href="https://twitter.com" className="social-icon-link"><FaTwitter className="social-icon" /></a>
                            <a href="https://www.instagram.com" className="social-icon-link"><FaInstagram className="social-icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
