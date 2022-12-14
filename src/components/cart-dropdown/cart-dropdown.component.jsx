import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../contexts/cart.context.jsx";

import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown=()=>{
    const { cartItems }=useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                { cartItems.map(item=><CartItem key={ item.id } cartItem={ item }/>) }
            </div>
            <Link className="checkout-button" to="/checkout">
                <Button>Checkout</Button>
            </Link>
        </div>
    );
};

export default CartDropdown;






/*
import { useContext } from 'react';

import { CartContext } from "../../contexts/cart.context.jsx";

import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown=()=>{
    const { cartItems }=useContext(CartContext);
    return (
        <div id="placeThings">
            <div className="cart-dropdown-container">
                <div className="cart-items">
                    { cartItems.map(item=><CartItem key={ item.id } cartItem={ item } />) }
                </div>
                <Button type="button">Checkout</Button>
            </div>
        </div>
    )
};

export default CartDropdown;

*/  
