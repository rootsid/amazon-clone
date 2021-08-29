import React from 'react'
import './Header.css'
import Logo from './amazon.png';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase'
import { signOut } from "firebase/auth";

function Header() {
    
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue()

    const history = useHistory()

    const handleAuth = () => {
        if (state.user) {
            signOut(auth).then(() => {
                history.push('/')
              }).catch((error) => {
                // An error happened.
              });
        } else {

        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} className="header__logo" alt="" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!state.user && "/login"}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">
                            {state.user ? 'Welcome' : 'Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                            {state.user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>                

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon  />
                        <span  className="header__optionLineTwo header__basketCount">{state.basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
