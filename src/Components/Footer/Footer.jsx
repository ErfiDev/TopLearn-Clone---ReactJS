import React from 'react';
import FooterHeader from './footer-header';
import FooterMain from './footer-main';
import FooterFooter from './footer-footer';
import "./Compiled/footer.css";

const Footer = ()=>{
    return(
        <footer className="footer-container">
            <FooterHeader />
            <FooterMain />
            <FooterFooter />
        </footer>
    );
};

export default Footer;