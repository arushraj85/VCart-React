import {createStore,applyMiddleware} from 'redux'



import {thunk} from 'redux-thunk';
import mainReducer from '../reducer';


const store = createStore(
    mainReducer,
    {
        items :[],
        totalAmount : 0
    },
    applyMiddleware(thunk))

export default store;