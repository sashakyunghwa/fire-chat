import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './helpers/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
