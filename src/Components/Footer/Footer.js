import React from 'react';
import './Footer.css';
import footerLogo  from '../../img/logo2.png';
import { useParams } from 'react-router-dom';
const Footer = () => {

    const date = new Date();
    const year  = date.getYear();

    return (
        <div className="container">
            <div className="footer">
            <div className="row">
                <div className="col-6 d-flex justify-content-start">
                    <img src={footerLogo} alt=""/>
                </div>
                <div className="col-3">
                    <ul className="food-blog">
                        <li> <a href="">About Online food</a> </li>
                        <li> <a href="">Read our blog</a> </li>
                        <li> <a href="">Sign up to delivery</a> </li>
                        <li> <a href="">Add your restaurant</a> </li>
                    </ul>
                </div>
                <div className="col-3">
                <ul className="faqs">
                        <li> <a href="">Get help</a> </li>
                        <li> <a href="">FAQs</a> </li>
                        <li> <a href="">View all restaurant</a> </li>
                        <li> <a href="">Restaurant near me</a> </li>
                    </ul>
                </div>
            </div>
             
              <div className="row mt-3 d-flex justify-content-between">
                 <div className="col-6 copyright">
                     <p>Copyright &copy; {year}. All right reserved</p>
                 </div>
                 <div className="col-6 privary">
                     <ul className="privary-list">
                         <li><a href="">Privacy policy</a></li>
                         <li><a href="">Terms of Use</a></li>
                         <li><a href="">Pricing</a></li>
                     </ul>
                 </div>
              </div>
              </div>
        </div>
    );
};

export default Footer;