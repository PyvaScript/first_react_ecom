import { useContext } from 'react';
import { CartContext }  from "../../contexts/cart.context.jsx";
import Button from "../button/button.component.jsx";

import "./product-card.styles.scss";

const ProductCard=({ product })=>{
    const { name, price, imageUrl }=product;
    const { addItemToCart, setCartQuantity }=useContext(CartContext);
    const addProductToCart=()=>{
        addItemToCart(product);
    }
    return (
        <div className="product-card-container">
            <img src={ imageUrl } alt={ `${ name }` }/>
            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">{ price} </span>
            </div>
            <Button onClick={addProductToCart} buttonType="inverted">Add To Cart</Button>
        </div>
    )
};

export default ProductCard;







/*
import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context.jsx";
import Button from "../button/button.component.jsx";
import "./product-card.styles.scss";

const ProductCard=({ product })=>{
    const { name, imageUrl, price }=product;
    return (
        <div className="product-card-container">
            <img src={ imageUrl } alt={ name }/>
            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <Button buttonType="inverted" type="button">Add To Cart</Button>
        </div>
    )
};

export default ProductCard;
*/
