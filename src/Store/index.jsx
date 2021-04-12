import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import CartReducer from './Reducer/cartReducer';
import productReducer from './Reducer/productReducer'
import LoaderReducer from './Reducer/loaderReducer'
import thunk from 'redux-thunk';
const mainReducer=combineReducers({
    cartStore:CartReducer,
    productStore:productReducer,
    loaderStore:LoaderReducer,
})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;