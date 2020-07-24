import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    SUB_QUANTITY,
    EMPTY_CART
} from './constants'

const initialState = {
    products: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {
                            ...product,
                            selected: true,
                            quantity: product.quantity >= 0 ? product.quantity + 1 : 1,
                            inventory: product.inventory - 1,
                            stock: product.inventory + product.quantity
                        }
                        : product,
                ),
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {...product, selected: false, quantity: 0,inventory: product.stock }
                        : product,
                ),
            };
        case UPDATE_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {
                            ...product,
                            quantity: action.qty,
                            inventory: product.stock - action.qty
                        }
                        : product,
                ),
            };
        case SUB_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? {
                            ...product,
                            quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                        }
                        : product,
                ),
            };
        case EMPTY_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.selected
                        ? {...product, selected: false, quantity: 1}
                        : product,
                ),
            };
        default:
            return state;
    }
};
