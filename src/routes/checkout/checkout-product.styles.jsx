import styled from "styled-components";

export const ProductContainer=styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgray;
    padding: 15px;
    font-size: 20px;
    align-items: center;
    text-align: center;

    .product-name, .price {
        width: 23%;
    };
`;

export const ProductImageContainer=styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    };
`;

export const ProductQuantity=styled.span`
    width: 23%;
    display: flex;
    
    .arrow {
        cursor: pointer;
    }
    
    .value {
        margin: 0 10px;
    }
`;

export const RemoveButton=styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
