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
    };

    return (
        <div key={ id } className="product-container">
            <div className="product-image-container">
                <img src={ imageUrl } alt={ `${ name }` }/>
            </div>
            <span className="product-name">{ name }</span>
            <span className='quantity'>
                <div className="arrow" onClick={ decreaseProductQuantity }>&#60;</div>
                <span className="value">{ quantity }</span>
                <div className="arrow" onClick={ increaseProductQuantity }>&#62;</div>
            </span>
            <span class="price">{ price }</span>
            <div className="remove-button" onClick={ removeProduct }>&#10005;</div>
        </div>
    );
};

export default CheckoutProduct;
