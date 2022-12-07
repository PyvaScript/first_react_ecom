import { createContext, useState, useEffect } from 'react';

export const CartDropdownContext=createContext({
    cartProducts: [],
    setCartProducts: ()=>null,
    dropdownOpen: false,
    setDropdownOpen:()=>null,
});

export const CartDropdownProvider=({ children })=>{
    const [cartProducts, setCartProducts]=useState(null);
    const [dropdownOpen, setDropdownOpen]=useState(false);
    const value={ cartProducts, setCartProducts, dropdownOpen, setDropdownOpen };
    return (
        <CartDropdownContext.Provider value={ value }>{ children }</CartDropdownContext.Provider>
    )
}
