import { useContext, useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component.jsx';
import { CategoriesContext } from '../../contexts/categories.context.jsx';
import { useParams } from 'react-router-dom';
import CategoryContainer, { CategoryTitle } from "./category.styles.jsx";

const Category=()=>{
    const { category }=useParams();
    const { categoriesMap }=useContext(CategoriesContext);
    const [ products, setProducts ]=useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{ category.toUpperCase() }</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product)=>(<ProductCard key={ product.id } product={ product } />))
                }
            </CategoryContainer>
        </>
    )
};

export default Category;
