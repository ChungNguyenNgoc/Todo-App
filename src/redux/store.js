// import { createStore } from 'redux';
// import rootReducer from './reducer';

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import {FiltersSlice} from "../components/filters/FiltersSlice";
import {TodoSlice} from "../components/todoList/TodoSlice";

const store = configureStore({
    reducer: {
        filters: FiltersSlice.reducer,
        todoList: TodoSlice.reducer,
    },
})

export default store;



