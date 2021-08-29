import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"

function CheckoutProduct(props) {
    const [{ basket }, dispatch] = useStateValue();

    let id = props.data.id

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct__image' src={props.data.image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {props.data.title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>    
                    <strong>{props.data.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.data.rating).fill().map((_, i) => (
                            <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct