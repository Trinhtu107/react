import {
    TIMER_INC,
} from './constants'

export const timerIncAction = () => {
    return {
        type: TIMER_INC,
        payload: 2
    }
};

