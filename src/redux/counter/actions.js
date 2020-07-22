import {
    COUNTER_DEC,
    COUNTER_INC
} from './constants'

export const counterIncActiona = () => {
    return {
        type: COUNTER_INC,
        payload: Math.random()
    }
};

export const counterDecAction = () => {
    return {
        type: COUNTER_DEC,
        payload: COUNTER_DEC
    }
};

export const addToCartAction = () => {
    return {
        type: COUNTER_INC,
        payload: Math.random()
    }
};