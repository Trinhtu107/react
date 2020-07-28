import {
     ADD_TO_CART ,
     REMOVE_FROM_CART ,
     UPDATE_QUANTITY ,
     SUB_QUANTITY ,
     EMPTY_CART
} from './constants'


export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id,
    };
};
export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        id,
    };
};
export const updatequantity = data => {
    let id  = data.id;
    let qty = Number(data.qty);

    return {
        type: UPDATE_QUANTITY,
        id,
        qty
    };
};
export const subtractQuantity = id => {
    return {
        type: SUB_QUANTITY,
        id,
    };
};
export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    };
};