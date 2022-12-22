import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CartContext } from "../../contexts/cart.context.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import { ReactComponent as JetLogo } from "../../assets/crown.svg";
import { signUserOut } from "../../utils/firebase/firebase.utils.js";
import { UserContext } from "../../contexts/user.context.jsx";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx';

const Navigation=()=>{
    
    const { currentUser }=useContext(UserContext);
    const { isCartOpen }=useContext(CartContext);
    
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <JetLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">Shop</NavLink>
                    {
                        currentUser ? (
                            <NavLink as="span" onClick={ signUserOut }>SIGN OUT</NavLink>
                        ):(
                            <NavLink to="/auth">SIGN IN</NavLink>
                        )
                    }
                    <CartIcon />
                    { isCartOpen && <CartDropdown /> }
                </NavLinks>
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
