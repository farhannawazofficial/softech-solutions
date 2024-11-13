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
                    <h4>Nexvy</h4>
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
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>

                </div>
            </div>
            <footer className="footer-bottom">
                <p>© 2023 Copyright by Nexvy Developers. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SubscriptionSection;
