import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.jsx';
import { ProductContainer,
    ProductImageContainer,
    ProductQuantity,
    RemoveButton
} from "./checkout-product.styles.jsx";

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
        <ProductContainer key={ id }>
            <ProductImageContainer>
                <img src={ imageUrl } alt={ `${ name }`}/>
            </ProductImageContainer>
            <span className="product-name">{ name }</span>
            <ProductQuantity>
                <div className="arrow" onClick={ decreaseProductQuantity }>&#60;</div>
                <span className="value">{ quantity }</span>
                <div className="arrow" onClick={ increaseProductQuantity }>&#62;</div>
            </ProductQuantity>
            <span class="price">{ price }</span>
            <RemoveButton onClick={ removeProduct }>&#10005;</RemoveButton>
        </ProductContainer>
    );
};

export default CheckoutProduct;
