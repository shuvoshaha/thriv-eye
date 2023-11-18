import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../../assets/images/product.webp'
import { FaStar } from 'react-icons/fa'
import './product-card.scss'

const ProductCard = () => {
    const navigate = useNavigate()

    const navigateHandler = () =>  {
        navigate(`product/${1}`)
    }

    return (
        <div className='te__single_product--card' onClick={navigateHandler}>
            <div className="product__body">

                <div className="product__thumb">
                    <img src={Image} className='product__img' alt="" />
                </div>

                <div className="product__content">
                    <div className="product__title">3PCS Set Fashion Mens Bracelet Necklace Watches Men Business Quartz Wrist Watch Classic Male Casual Leather Watch Reloj Hombre</div>

                    <div className="product__price-rating--group">
                        <div className="product__price--group">
                            <span className='new__price'>&#2547;8500</span>
                            <span className='old__price'><del>990</del></span>
                        </div>
                        
                        <div className="product__rating--group">
                            <FaStar className='rating__icon' />
                            <span className='rating__stat'>0 (No Review)</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCard