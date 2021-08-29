import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/61IgcpiA4eL._SX3000_.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="45465324" 
                        title='The Lean Startup: How Constant Innovation Creates Radically Successfull Business Paperback' 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
                        rating={5} />
                    <Product 
                        id="5821546"
                        title='Samsung Galaxy Ear Buds Pro, Violet' 
                        price={180.99} 
                        image="https://m.media-amazon.com/images/I/71+KduOJDcL._SX679_.jpg" 
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850" 
                        title="Samsung 49' Curved LED Gaming Monitor"
                        price={199.99} 
                        image="https://m.media-amazon.com/images/I/81ZXKUvoyuL._SX679_.jpg" 
                        rating={5} />
                    <Product 
                        id="234458930"
                        title='Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)' 
                        price={98.99} 
                        image="https://m.media-amazon.com/images/I/61+H0rsBOKL._SX679_.jpg" 
                        rating={5} />
                    <Product 
                        id="3254354345"
                        title='2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)' 
                        price={598.99} 
                        image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SX679_.jpg" 
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product
                    id="90823332"
                    title='Samsung 34 inch (86.4 cm) LED Curved Computer Monitor - Full HD, Super Slim,VA Panel,HDR 10 - LC34G55TWWWXXL (Black)' 
                    price={1094.99} 
                    image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg" 
                    rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
