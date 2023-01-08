import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context.jsx";
import { ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx";

const CartIcon=()=>{

    /*
    MY SOLUTION FOR TOGGLING THE DROPDOWN CART
    const { isCartOpen, setIsCartOpen, cartCount, toggleIsCartOpen }=useContext(CartContext);
    */

    const { isCartOpen, setIsCartOpen, cartCount }=useContext(CartContext);


    /*

    My first solution to toggling the dropdown cart

    const toggleDropdownDisplay=()=>{
        dropdownOpen==false ? (
            setDropdownOpen(true)
        ):(
            setDropdownOpen(false)
        )
    };

    My second solution for the dropdown cart

    SIMPLY ADD toggleCartDropdown TO THE ONCLICK ATTRIBUTE FOR THE CARTICONCONTAINER COMPONENT

    const toggleCartDropdown=()=>{
        toggleIsCartOpen(isCartOpen);
    };

    */

    const toggleIsCartOpen=()=> setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={ toggleIsCartOpen }>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;
