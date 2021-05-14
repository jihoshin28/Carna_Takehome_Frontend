import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import usersReducers from './usersReducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users']
}

const reducer = combineReducers({
    users: usersReducers
})


export default persistReducer(persistConfig, reducer)