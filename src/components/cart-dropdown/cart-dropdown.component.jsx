import "./cart-dropdown.styles.scss";
import Button from "../button/button.component.jsx";

const CartDropdown=()=>{
    return (
        <div id="placeThings">
            <div className="cart-dropdown-container">
                <div className="cart-items" />
                <Button type="button">Checkout</Button>
            </div>
        </div>
    )
};

export default CartDropdown;
