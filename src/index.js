import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';

import redditApp from './components/redditApp';
import RedditApp from './components/redditApp';

import * as actions from './actions';

const store = configureStore();

console.log(store.getState());
store.dispatch(actions.post("0", "Pedron", "content"));
store.dispatch(actions.comment("0", "Hola", "1"));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <RedditApp />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
