import { createContext, useState } from 'react';
import SHOP_DATA from "../shop-data.json";

export const ProductsContext=createContext({
    currentProducts:[],
    setCurrentProducts:()=>null,
});

export const ProductsProvider=({ children })=>{
    const [currentProducts, setCurrentProducts]=useState(SHOP_DATA);
    const value={ currentProducts };
    return <ProductsContext.Provider value={ value }>{ children }</ProductsContext.Provider>
};
