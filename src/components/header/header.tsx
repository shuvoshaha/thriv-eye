import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaHeart, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import './header.scss'

const Header = () => {
    return (
        <div className="thrid__eye-header">
            <div className="te__container">
                <div className="thrid__eye-inner">
                    <div className="te__logo">
                        <Link to="/">
                            Logo
                        </Link>
                    </div>

                    <div className="te__social--icons">
                        <ul className="social__icons--group">
                            <li className="social__icon">
                                <a target='_blank' href='' className='icons__item'>
                                    <FaPhone className='icons__thumb' />
                                </a>
                            </li>

                            <li className="social__icon">
                                <a target='_blank' href='' className='icons__item'>
                                    <FaHeart className='icons__thumb' />
                                </a>
                            </li>

                            <li className="social__icon overlay--item">
                                <a href='' className='icons__item'>
                                    <FaShoppingCart className='icons__thumb' />
                                    <span className='cart__quantity'>10</span>
                                </a>
                            </li>

                            <li className="social__icon">
                                <a target='_blank' href='' className='icons__item'>
                                    <FaUserAlt className='icons__thumb' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header