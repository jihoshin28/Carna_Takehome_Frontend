import {persistStore} from 'redux-persist'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
export const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
))

export const persistor = persistStore(store)

export default {store, persistor};