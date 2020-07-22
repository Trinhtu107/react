import { createStore } from 'redux';
import rootReducer from './rootReducer';
import Data from "../Hello/Data/product";

const initState = {
    counter: {data: 2},
    timer: {data: 1},
    cart:{products:Data}
};

export default function configureStore(initialState= initState) {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
