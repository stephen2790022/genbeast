import React from 'react';
import './footer.scss'
const Footer = () => {
    return (
        <div className="footer-main">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="right">Copyright © 2021 GENBEAST. All rights reserved.</div>
                    <div className="social">
                        <div className="social__link"><i className="fab fa-twitter-square"></i></div>
                        <div className="social__link"><i class="fab fa-discord"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;