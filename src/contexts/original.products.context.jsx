import { createContext, useState, useEffect } from 'react';
//import { addCollectionsAndDocuments } from '../utils/firebase/firebase.utils.js';
import { getCollectionsAndDocuments } from '../utils/firebase/firebase.utils.js';
import SHOP_DATA from "./tutorial-shop-data.js";

export const ProductsContext=createContext({
    currentProducts:[],
    setCurrentProducts:()=>null,
});

export const ProductsProvider=({ children })=>{
    const [currentProducts, setCurrentProducts]=useState([]);
    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categoryMap=await getCollectionsAndDocuments();
            console.log(categoryMap);
        };
        getCategoriesMap();
    },[]);
    const value={ currentProducts };
    return <ProductsContext.Provider value={ value }>{ children }</ProductsContext.Provider>
};


/*
export const ProductsProvider=({ children })=>{
    const [currentProducts, setCurrentProducts]=useState([]);
    USED TO INITIALLY UPLOAD DATA TO FIREBASE
    WE NEED TO DELETE THIS BECAUSE IT WILL UPLOAD ALL THE DATA FROM SHOP_DATA EVERY TIME IT LOADS
    useEffect(()=>{
        addCollectionsAndDocuments('categories',SHOP_DATA);
    },[])
    const value={ currentProducts };
    return <ProductsContext.Provider value={ value }>{ children }</ProductsContext.Provider>
};
*/
