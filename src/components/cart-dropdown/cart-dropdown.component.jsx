import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../contexts/cart.context.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { CartDropdownContainer, CartItems, EmptyMessage, CartDropdownButton } from "./cart-dropdown.styles.jsx";
//import { Link } from 'react-router-dom';

const CartDropdown=()=>{
    const { cartItems }=useContext(CartContext);
    const navigate=useNavigate();
    const goToCheckoutHandler=()=>{
        navigate("/checkout");
    };
    return (
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ? (
                    cartItems.map(item=><CartItem key={ item.id } cartItem={ item }/>)
                    ) : (
                        <EmptyMessage>Your cart is emtpy</EmptyMessage>
                    )
                }
            </CartItems>
            <Button buttonType={ BUTTON_TYPE_CLASSES.base } onClick={ goToCheckoutHandler }>Checkout</Button>
            {
            /*
            <Link className="checkout-button" to="/checkout">
                <Button>Checkout</Button>
            </Link>
            */
            }
        </CartDropdownContainer>
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
