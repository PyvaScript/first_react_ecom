import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles.jsx";

export const CartDropdownContainer=styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${ BaseButton },
  ${ GoogleSignInButton },
  ${ InvertedButton } {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }
`;

export const EmptyMessage=styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems=styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;


/*
COURSE SCSS FILE
MY FILE USES AUTO FOR OVERFLOW INSTEAD OF SCROLL.
.cart-dropdown-container {
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
  
    .cart-items {
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    }
  
    button {
      margin-top: auto;
    }
  }
  */