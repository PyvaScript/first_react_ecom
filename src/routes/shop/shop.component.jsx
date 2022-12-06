import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context.jsx";

const Shop=()=>{
    const { currentProducts }=useContext(ProductsContext);
    return (
        <div>
            { currentProducts.map(({ id, name })=>(
                <div key={ id }>
                    <h1>{ name }</h1>
                </div>
            ))}
        </div>
    )
};

export default Shop;
