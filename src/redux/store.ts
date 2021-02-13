import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux'

import Reducer from './reducer';

export type RootReducer = ReturnType<typeof myReducer>

const myReducer = combineReducers({
    defaultReducer: Reducer,
})

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;

const store = createStore(myReducer);

export default store;