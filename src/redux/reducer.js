

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: FiltersSlice(state.filters, action),
//         todoList: TodoSlice(state.todoList, action),
//     }
// }

import { combineReducers } from 'redux';
import FiltersSlice from '../components/filters/FiltersSlice';
import TodoSlice from '../components/todoList/TodoSlice';

const rootReducer = combineReducers({
    filters: FiltersSlice,
    todoList: TodoSlice,
}); 

export default rootReducer;