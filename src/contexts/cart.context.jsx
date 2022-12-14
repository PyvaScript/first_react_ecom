import { createContext, useState, useEffect, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils.js';

const addCartItem=(cartItems, productToAdd)=>{
    const existingCartItem=cartItems.find((cartItem)=>cartItem.id===productToAdd.id);
    if(existingCartItem) {
        return cartItems.map((cartItem)=>cartItem.id===productToAdd.id?{ ...cartItem, quantity: cartItem.quantity+1 }:cartItem);
    }
    return [...cartItems, { ...productToAdd, quantity:1 }]
};

const reduceItemQuantity=(cartItems, productToReduce)=>{
    if(productToReduce.quantity===1) {
        return cartItems.filter(item=>item!==productToReduce);
    };
    return cartItems.map((cartItem)=>cartItem.id===productToReduce.id?{ ...cartItem, quantity: cartItem.quantity-1 }:cartItem);
};

const removeItemFromCart=(cartItems, productToRemove)=>cartItems.filter(item=>item.id!==productToRemove.id);

export const CartContext=createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount: 0,
    totalPrice: 0,
});

const CART_ACTION_TYPES={
    SET_CART_ITEMS:'SET_CART_ITEMS',
    SET_IS_CART_OPEN:"SET_IS_CART_OPEN",
};

//Does the the code below work because of variable redeclaration??
const INITIAL_STATE={
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0
};

const cartReducer=(state, action)=>{
    const { type, payload }=action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            };
        /*
        My solution to the dropdown cart toggle issue continues below
        case "SET_CART_OPEN":
            return {
                ...state,
                ...payload,
            };
        */
        default:
            throw new Error(`Unhandled type ${ type } in cartReducer`);
    };
};

export const CartProvider=({ children })=>{
    /*
    const [isCartOpen, setIsCartOpen]=useState(false);
    const [cartItems, setCartItems]=useState([
        {
            "id":40,
            "name":"Gulfstream G800",
            "imageUrl":"data:image/jpeg;base64,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",
            "price":72500000,
            'quantity':2,
        }
    ]);
    const [cartCount, setCartCount]=useState(0);
    const [totalPrice, setTotalPrice]=useState(cartItems.reduce((total,item)=>total+item.price*item.quantity,0));

    useEffect(()=>{
        setCartCount(cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0));
    },[cartItems]);

    useEffect(()=>{
        setTotalPrice(cartItems.reduce((total,item)=>total+item.price*item.quantity,0));
    },[cartItems])
    */

    //const [state,dispatch]=useReducer(cartReducer,INITIAL_STATE);

    const [{ isCartOpen, cartItems, cartCount, totalPrice }, dispatch]=useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer=(newCartItems)=>{
        const newCartCount=newCartItems.reduce((total, item)=>total+item.quantity,0);
        const newTotalPrice=newCartItems.reduce((total, item)=>total+item.price*item.quantity,0);
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItems:newCartItems,
            totalPrice:newTotalPrice,
            cartCount:newCartCount
        }));
    };

    /*
    Additional part of my solution for the cart dropdown toggle
    const updateIsCartOpenReducer=(newIsCartOpen)=>{
        dispatch({ type: 'SET_CART_OPEN', payload: { isCartOpen: newIsCartOpen } })
    };
    */

    const addItemToCart=(productToAdd)=>{
        const newCartItems=addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const reduceCartItem=(productToReduce)=>{
        const newCartItems=reduceItemQuantity(cartItems, productToReduce);
        updateCartItemsReducer(newCartItems);
    };
    
    const removeCartItem=(productToRemove)=>{
        const newCartItems=removeItemFromCart(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };

    //Tutorial solution to toggling the dropdown cart is below.
    //I will use the tutorial solution in this application to avoid any conflic of variables and usage in the future
    const setIsCartOpen=(bool)=>{
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));
    };

    /*
    MY SOLUTION TO TOGGLING THE DROPDOWN CART
    const toggleIsCartOpen=(cartOpen)=>{
        const newIsCartOpen=!cartOpen;
        updateIsCartOpenReducer(newIsCartOpen);
    };
    */

    /*
    MY SOLUTION
    const addItemToCart=(productToAdd)=>{
        const res=addCartItem(cartItems, productToAdd);
        setCartItems(res);
        setCartQuantity(()=>{
            return res.reduce((accumulator, currentElement)=>accumulator+currentElement.quantity,0);
        });
    };
    */

    const value={
        isCartOpen,
        setIsCartOpen,
        //Create the above function to update the reducer appropriately
        addItemToCart,
        reduceCartItem,
        removeCartItem,
        //toggleIsCartOpen,
        cartItems,
        cartCount,
        totalPrice
    };

    return <CartContext.Provider value={  value }>{ children }</CartContext.Provider>
};
