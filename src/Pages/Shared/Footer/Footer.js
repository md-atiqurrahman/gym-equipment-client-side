import React from 'react';
import './Footer.css';
import img from '../../../images/Footer/payment method.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope, faClock, faTruckFast, faHeadset, faArrowRotateLeft, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePay, faGooglePlay, faGooglePlusG, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <div className='footer-container d-lg-flex justify-content-around text-white pt-5'>
                <div className='store-info'>
                    <button>
                        Fitness Store
                    </button>
                    <div className='d-flex align-items-baseline'>
                        <FontAwesomeIcon style={{ marginRight: '10px', color: 'white' }} icon={faHome} />
                        <p>6688Princess Road, London,<br />
                            Greater London BAS 23JK, UK</p>
                    </div>
                    <p>
                        <FontAwesomeIcon style={{ marginRight: '10px', color: 'white' }} icon={faPhone} />
                        (012) 800 456 789-987
                    </p>
                    <p>
                        <FontAwesomeIcon style={{ marginRight: '10px', color: 'white' }} icon={faEnvelope} />
                        support@FitnessStore.com
                    </p>
                    <p>
                        <FontAwesomeIcon style={{ marginRight: '10px', color: 'white' }} icon={faClock} />
                        Work time: 8.00 -22.00
                    </p>
                    <p style={{ marginTop: '10px', fontSize: '20px' }}>
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faFacebookF} />
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faTwitter} />
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faGooglePlusG} />
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faInstagram} />
                        <FontAwesomeIcon style={{ marginRight: '25px' }} icon={faYoutube} />

                    </p>
                </div>
                <div className='information'>
                    <h5>Information</h5>
                    <p>About us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Returns</p>
                    <p>Site map</p>
                    <p>Gift certificates</p>
                </div>
                <div className='information'>
                    <h5>My Account</h5>
                    <p>My Account</p>
                    <p>Stock History</p>
                    <p>Wish List</p>
                    <p>Newsletter</p>
                    <p>Affiliate</p>
                    <p>Specials</p>
                    <p>International Orders</p>
                </div>
                <div className='support'>
                    <div className='d-flex '>
                        <FontAwesomeIcon className='icon' icon={faTruckFast} />
                        <p>
                            Free Shipping <br />
                            <span className='under-text' >Free shipping on all delivery</span>
                        </p>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon className='icon' icon={faHeadset} />
                        <p>
                            Support 24/7 <br />
                            <span className='under-text'>Contact us 24 hours a day, 7 days a week</span>
                        </p>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon className='icon' icon={faArrowRotateLeft} />
                        <p>
                            30 Days Return <br />
                            <span className='under-text'> Return it within 30 days for an exchange</span>
                        </p>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon className='icon' icon={faCreditCard} />
                        <p>
                            100% Payment Secure <br />
                            <span className='under-text'>We ensure secure payment with PEV</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* <hr style={{color: '#999999',marginTop: '40px'}} className='w-90' /> */}
            <div className='copyright-info d-lg-flex justify-content-around align-items-center text-white '>
                <div>
                    <p className='mb-0'>Copyright © {year} <span style={{ color: ' #ec3642' }}>Fitness Store</span> all rights reserverd</p>
                </div>
                <div>
                    <img width={'100%'} src={img} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;