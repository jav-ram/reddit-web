import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';

import RedditApp from './components/redditApp';

import * as actions from './actions';

const store = configureStore();

console.log(store.getState());
store.dispatch(actions.post("0", "Primer post", "Es el primer post. Usado para pruebas. Por favor comentar para dejar sugerencia."));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <RedditApp />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
