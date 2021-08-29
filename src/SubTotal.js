import React from 'react'
import './SubTotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function calculatePrice(state) {
    var price = null
    // eslint-disable-next-line
    state.basket.map(item => {
        price += item.price
    })

    return price
}

function SubTotal() {
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const value = calculatePrice(state)

    return (
        <div className="subtotal"> 
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({state.basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={value ? value : 0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Process to Checkout</button>
        </div>
    )
}

export default SubTotal
