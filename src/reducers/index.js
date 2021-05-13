import { reducer as formReducer} from 'redux-form'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'items', 'categories', 'stores', 'cart', 'order', 'modals']
}

const reducer = combineReducers({
    items: itemsReducer,
    auth: authReducer,
    categories: categoriesReducer,
    stores: storesReducer,
    modals: modalsReducer,
    cart: cartReducer,
    order: orderReducer,
    form: formReducer
})


export default persistReducer(persistConfig, reducer)