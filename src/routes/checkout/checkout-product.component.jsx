import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import "./checkout-product.styles.scss";

const CheckoutProduct=({ product })=>{

    const { id, name, price, imageUrl, quantity }=product;

    const { addItemToCart, reduceCartItem, removeCartItem }=useContext(CartContext);

    const increaseProductQuantity=()=>{
        addItemToCart(product);
    };

    const decreaseProductQuantity=()=>{
        reduceCartItem(product);
    };

    const removeProduct=()=>{
        removeCartItem(product);
    }

    return (
        <div key={ id } className="product-container">
            <div className="product-section">
                <img src={ imageUrl } alt={ `${ name }`}/>
            </div>
            <div className="product-section">
                <span>{ name }</span>
            </div>
            <div className="product-section">
                <div className="product-quantity">
                    <span onClick={ decreaseProductQuantity }>&#60;</span>
                    <span>{ quantity }</span>
                    <span onClick={ increaseProductQuantity }>&#62;</span>
                </div>
            </div>
            <div className="product-section">
                <span>{ price }</span>
            </div>
            <div className="product-section">
                <span className="product-removal" onClick={ removeProduct }>X</span>
            </div>
        </div>
    )
};

export default CheckoutProduct;
