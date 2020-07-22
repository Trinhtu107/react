import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import timerReducer from './timer/reducer';
import shoppingReducer from './cart/reducer';

export default combineReducers({
    counter: counterReducer,
    timer: timerReducer,
    cart:shoppingReducer
});
