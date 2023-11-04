import React from 'react'
import { Link } from 'react-router-dom'
import PlayStore from 'assets/images/google.png';
import AppStore from 'assets/images/apple-app-store.jpg'
import QRCode from 'assets/images/qr-code.png'
import './footer.scss'

const Footer: React.FC = () => {
    return (
        <div className='te__footer'>
            <div className="te__container">
                <div className="te__footer--inner">

                    <div className="te__footer--main">
                        <div className="te__footer--logo">
                            Logo
                        </div>
                        <div className="te__address">
                            Office Address: <br />
                            House: 20, Block: D, Mirpur <br />
                            Avenue, Mirpur - 11, Dhaka
                        </div>
                    </div>

                    <div className="te__footer--secondary">
                        <div className="te__footer--col">
                            <div className="te__footer-col--title">Customer Care</div>

                            <ul className="te__footer-menus--list">
                                <li className='te__footer--menu'>
                                    <a className='footer__menu--item' href='tel:+8801712345678'>Mobile: 8801712345678</a>
                                </li>

                                <li className='te__footer--menu'>
                                    Call Us (10AM - 7:00PM)
                                </li>
                            </ul>
                        </div>

                        <div className="te__footer--col">
                            <div className="te__footer-col--title">Legal</div>

                            <ul className="te__footer-menus--list">
                                <li className='te__footer--menu'>
                                    <Link to="" className='footer__menu--item'>Privacy Policy</Link>
                                </li>

                                <li className='te__footer--menu'>
                                    <Link to="" className='footer__menu--item'>Terms & Conditions</Link>
                                </li>

                                <li className='te__footer--menu'>
                                    <Link to="" className='footer__menu--item'>Return & Refund</Link>
                                </li>

                                <li className='te__footer--menu'>
                                    <Link to="" className='footer__menu--item'>Cancellation Policy</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="te__footer--col">
                            <div className="te__footer-col--title">Download App</div>

                            <ul className="te__footer-menus--list">
                                <li className='te__footer--menu'>
                                    <Link to="" className='footer__menu--item app--download'>
                                        <img src={PlayStore} alt="" className="app--icon" />
                                        <img src={AppStore} alt="" className="app--icon" />
                                    </Link>
                                </li>

                                <li className='te__footer--menu'>
                                    <Link to="" className='footer__menu--item app--download'>
                                        <img src={QRCode} alt="" className="app--icon" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer