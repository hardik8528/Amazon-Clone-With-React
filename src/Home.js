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

                    <Product title="Soft Skills: The Software Developer's Life Manual (Manning) by John Z. Sonmez" price='449' rating={4} image='https://m.media-amazon.com/images/I/51La7RXPopL._AC_UY327_FMwebp_QL65_.jpg' />

                    <Product title="DOUBLE R BAGS Front Frame Handlebar Cycle Bag for Men Women Boys Bicycle Mobile Accessories " price='631' rating={5} image='https://m.media-amazon.com/images/I/719iCqIUCuL._AC_UY327_FMwebp_QL65_.jpg' />

                </div>

                <div className='home__row'>

                <Product title="Samsung Galaxy Watch (Bluetooth + LTE, 46 mm) - Silver" price='9999' rating={4} image='https://m.media-amazon.com/images/I/71oNPZKNTfL._AC_UL480_FMwebp_QL65_.jpg' />

                <Product title="Bournvita Cadbury Health Drink, 1kg Jar" price='399' rating={5} image='https://m.media-amazon.com/images/I/51gn+ccasqL._AC_UL480_FMwebp_QL65_.jpg' />

                <Product title="New Apple iPhone 12 Pro (128GB) - Graphite" price='1,19,900' rating={4} image='https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_UY327_FMwebp_QL65_.jpg' />

                </div>

                <div className='home__row'>
                <Product title="Soft Skills: The Software Developer's Life Manual (Manning)" price='1,54,999' rating={5} image='https://m.media-amazon.com/images/I/81V+hqDbomL._AC_UY327_FMwebp_QL65_.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Home
