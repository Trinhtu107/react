import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import Time from './Component/time/'


ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

function showTime() {
    ReactDOM.render(<Time />, document.getElementById('time'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
setInterval(showTime, 0);

