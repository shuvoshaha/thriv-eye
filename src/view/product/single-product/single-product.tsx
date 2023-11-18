import React from 'react'
import Image from 'assets/images/product.webp'
import ProductInfo from 'assets/images/productguide.png'
import { FaStar, FaPlus, FaMinus } from 'react-icons/fa'
import './single-product.scss';



const SingleProduct: React.FC = () => {
    return (
        <div className='te__single_product'>
            <div className="te__container">
                <div className="te__single_product--inner">

                    <div className="te__single_product-head">
                        <div className="te__single_product-head--img">
                            <img src={Image} className='te__single_product-head--thumb' alt="" />
                        </div>


                        <div className="te__single_product-head--info">
                            <h3 className="te__product--info-title info-title  mb-1">Mens long black sleevs</h3>
                            <div className="te__single_product-head--info-inner  mb-1">


                                <div className="te__single_product-head--info-sizes">
                                    <h3 className="te__product--info-title size__title mb-05">Size</h3>

                                    <div className="sizes mb-1">

                                        {
                                            ["S", "M", "L", "XL"].map((item: any, idx: number) => {
                                                return <button key={idx} className='product__btn  single--size'>{item}</button>
                                            })
                                        }
                                    </div>

                                </div>

                                <div className="te__single_product-head--info__colors_availability mb-1">
                                    <div className="te__p_colors">
                                        <div className="te__product--info-title colors__title mb-05">Color</div>
                                        <div className="colors">
                                            {["Red", "Blue", "Green"].map((item: any, idx: number) => {
                                                return <button key={idx} className='product__btn single--size'>{item}</button>
                                            })
                                            }
                                        </div>
                                    </div>

                                    <div className="te__p_availability">
                                        <div className="te__product--info-title colors__title mb-05 ">In Stock</div>
                                        <div className="availability">
                                            <button className='product__btn availability__btn'>50</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="te__single_product__price-rating--group  mb-1">
                                    <div className="product__price--group">
                                        <span className='new__price'>&#2547;8500</span>
                                        <span className='old__price'><del>990</del></span>
                                    </div>

                                    <div className="product__rating--group">
                                        <FaStar className='rating__icon' />
                                        <span className='rating__stat'>0 (No Review)</span>
                                    </div>
                                </div>

                                <div className="te__single_product_cart--btn-group  mb-1">
                                    <div className="cart__btns">
                                        <button className='cart__btn decrease'><FaMinus /></button>
                                        <button className='cart__btn value'>1</button>
                                        <button className='cart__btn increase'><FaPlus /></button>
                                    </div>

                                    <button className='add__to_cart_btn'>(+) Add to cart</button>
                                </div>

                            </div>
                        </div>
                        </div>

                        <div className="te__single_product__divider"></div>

                        <div className="te__single_product--body">
                            <img src={ProductInfo} className='product__guide_img' alt='Product Guide' />
                        </div>

                        <div className="te__single_product--footer"></div>
                    </div>
                </div>
            </div>
            )
}

            export default SingleProduct