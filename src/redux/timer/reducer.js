import {
    TIMER_INC,
} from './constants'
const initState = {data: 1};

export default (state = initState, action) => {
    switch (action.type) {
        case TIMER_INC:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state
    }
}
