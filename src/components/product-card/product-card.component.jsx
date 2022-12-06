import "./product-card.styles.scss";
import Button from "../button/button.component.jsx";

const ProductCard=()=>{
    return (
        <div class="product-card-container">
            <img/>
            <div className="footer">
                <span className="name"></span>
                <span className="price"></span>
            </div>
            <Button buttonType="inverted" type="button">Add To Cart</Button>
        </div>
    )
};

export default ProductCard;
