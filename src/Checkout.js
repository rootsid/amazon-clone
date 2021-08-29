import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'
import CheckoutProduct from './CheckoutProduct'
import Product from './Product'

function Checkout() {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <a href="https://www.primevideo.com/detail/amzn1.dv.gti.a8d60548-776e-4ead-a98e-9428e3675fbb" target="_blank" rel="noreferrer">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/GZK/Launch/400x39-SWM_EN_P._CB644089983_.jpg" alt="" /></a>
                <div>
                    <h2 className="checkout__title">Shopping Cart</h2>
                    {basket.map(item=>(
                        <CheckoutProduct data={item} />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
