import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Nov/1500x600_Hero-Tall_np._CB416108473_.jpg'
                />

                <div className='home__row'>
                    <Product title="Soft Skills: The Software Developer's Life Manual (Manning)" price='449' rating={5} image='https://m.media-amazon.com/images/I/51La7RXPopL._AC_UY327_FMwebp_QL65_.jpg' />
                    <Product />
                </div>

                <div className='home__row'>
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className='home__row'>
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
