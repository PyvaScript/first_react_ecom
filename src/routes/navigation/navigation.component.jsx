import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CartContext } from "../../contexts/cart.context.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import { ReactComponent as JetLogo } from "../../assets/crown.svg";
import { signUserOut } from "../../utils/firebase/firebase.utils.js";
import { UserContext } from "../../contexts/user.context.jsx";
import "./navigation.styles.scss";

const Navigation=()=>{
    
    const { currentUser }=useContext(UserContext);
    const { isCartOpen }=useContext(CartContext);
    
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <JetLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={ signUserOut }>SIGN OUT</span>
                        ):(
                            <Link className="nav-link" to="/auth">SIGN IN</Link>
                        )
                    }
                    <CartIcon />
                    { isCartOpen && <CartDropdown /> }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
