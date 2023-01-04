import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context.jsx";
import { ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx";

const CartIcon=()=>{

    const { isCartOpen, setIsCartOpen, cartCount, toggleIsCartOpen }=useContext(CartContext);


    /*

    const toggleDropdownDisplay=()=>{
        dropdownOpen==false ? (
            setDropdownOpen(true)
        ):(
            setDropdownOpen(false)
        )
    };

    */

    const toggleCartDropdown=()=>{
        toggleIsCartOpen(isCartOpen);
    };

    return (
        <CartIconContainer onClick={ toggleCartDropdown }>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;
