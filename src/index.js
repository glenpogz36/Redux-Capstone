import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFireStore, getFireStore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import firebaseConfig from '../src/config/firebaseConfig'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFireStore, getFirebase })),
        reduxFireStore(firebaseConfig),
        reactReduxFirebase(firebaseConfig),
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
