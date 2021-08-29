import React from 'react'
import './Product.css';
import {useStateValue} from "./StateProvider"

function Product(props) {
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into data layer
        dispatch ({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating
            }
        })
    }

    return (
        <div className="product" key={props.id}>   
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.rating).fill().map((_, i) => (
                            <p key={i}>⭐</p>
                    ))}
                </div>
            </div>
            <img src={props.image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
