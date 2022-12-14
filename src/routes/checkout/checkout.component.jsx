import { useContext, useEffect } from 'react';
import { CartContext } from "../../contexts/cart.context.jsx"
import CheckoutProduct from './checkout-product.component.jsx';
import "./checkout.styles.scss";

const Checkout=()=>{

    const { setIsCartOpen, cartItems, totalPrice }=useContext(CartContext);

    useEffect(()=>{
        setIsCartOpen(false);
    },[])

    return (
        <div className="checkout-container">
            <div className="checkout-headings">
                <span className="checkout-heading">AIRCRAFT</span>
                <span className="checkout-heading">DESCRIPTION</span>
                <span className="checkout-heading">QUANTITY</span>
                <span className="checkout-heading">PRICE</span>
                <span className="checkout-heading">REMOVE</span>
            </div>
            <hr/>
            <div className="products-container">
                {
                    cartItems.map((product)=>(
                        <CheckoutProduct key={ product.id } product={ product }/>
                        )
                    )
                }
            </div>
            {
                cartItems.length>0?<hr/>:null
            }
            <div className="total-price">
                <h1>TOTAL PRICE: ${ totalPrice }</h1>
            </div>
        </div>
    )
};

export default Checkout;
