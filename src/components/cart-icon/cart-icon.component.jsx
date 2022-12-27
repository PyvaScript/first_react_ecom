import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context.jsx";
import { ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx";

const CartIcon=()=>{

    const { isCartOpen, setIsCartOpen, cartCount }=useContext(CartContext);

    const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen);


    /*

    const toggleDropdownDisplay=()=>{
        dropdownOpen==false ? (
            setDropdownOpen(true)
        ):(
            setDropdownOpen(false)
        )
    };

    */

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;
