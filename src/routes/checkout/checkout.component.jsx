import { useContext, useEffect } from 'react';
import { CartContext } from "../../contexts/cart.context.jsx"
import CheckoutProduct from './checkout-product.component.jsx';
import { CheckoutContainer, CheckoutHeadings, CheckoutHeading, ProductsContainer, TotalPrice } from "./checkout.styles.jsx";

const Checkout=()=>{

    const { setIsCartOpen, cartItems, totalPrice }=useContext(CartContext);

    useEffect(()=>{
        setIsCartOpen(false);
    },[])

    return (
        <CheckoutContainer>
            <CheckoutHeadings>
                <CheckoutHeading>AIRCRAFT</CheckoutHeading>
                <CheckoutHeading>DESCRIPTION</CheckoutHeading>
                <CheckoutHeading>QUANTITY</CheckoutHeading>
                <CheckoutHeading>PRICE</CheckoutHeading>
                <CheckoutHeading>REMOVE</CheckoutHeading>
            </CheckoutHeadings>
            <hr/>
            <ProductsContainer>
                {
                    cartItems.map((product)=>(
                        <CheckoutProduct key={ product.id } product={ product }/>
                        )
                    )
                }
            </ProductsContainer>
            {
                cartItems.length>0?<hr/>:null
            }
            <TotalPrice>
                <h1>TOTAL PRICE: ${ totalPrice }</h1>
            </TotalPrice>
        </CheckoutContainer>
    )
};

export default Checkout;
