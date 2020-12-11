import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>Soft Skills: The Software Developer</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>449</strong>
                </p>
                <div className='product__rating'>
                    <p>⭐</p>
                </div>
            </div>

            <img src='https://m.media-amazon.com/images/I/51La7RXPopL._AC_UY327_FMwebp_QL65_.jpg' />

            <button>Add To Cart</button>

        </div>
    )
}

export default Product
