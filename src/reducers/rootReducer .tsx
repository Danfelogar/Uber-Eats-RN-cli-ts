import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';

const reducers = combineReducers({
    cartReducer: cartReducer,
});

export const rootReducer = (state: any, action: any) => {
    return reducers(state, action);
};
