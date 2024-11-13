import React from 'react';
import './SubscriptionSection.css';

const SubscriptionSection = () => {
    return (
        <div className="subscription-section">
            <div className="cta-box">
                <h3>Hire the best developers and designers around!</h3>
                <button className="cta-button">Hire Top Developers</button>
            </div>
            <div className="footer-content">
                <div className="footer-company">
                    <h4>Softech Solutions</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="footer-icons">
                        <img src="https://via.placeholder.com/50x20" alt="Google Icon" />
                        <img src="https://via.placeholder.com/50x20" alt="100 Icon" />
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Links</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Case Studies</li>
                        <li>How it works</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Areas We Serve</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact us</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>+92 3197781723</p>
                    <div className="footer-socials">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <footer className="footer-bottom">
                <p>© 2023 Copyright by JK Developers. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SubscriptionSection;
