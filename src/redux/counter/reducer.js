import {
    COUNTER_DEC,
    COUNTER_INC
} from './constants'
const initState = {data: 1};

export default (state = initState, action) => {
    switch (action.type) {
        case COUNTER_INC:
            return {
                data: action.payload
            };
        case COUNTER_DEC:
            return {
                result: action.payload
            };
        default:
            return state
    }
}
