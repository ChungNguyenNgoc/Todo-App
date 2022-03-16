import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritiesSelector = (state) => state.filters.priorities

export const todoListSelector = (state) => {
    const searchText = searchTextSelector(state)
    const status = filterStatusSelector(state)
    const priorities = filterPrioritiesSelector(state)

    const todoRemaining = state.todoList.filter((todo) => {
        if(status === 'All') {
            return ( priorities.length 
                ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                : todo.name.includes(searchText)
            )
        } else {
            return (
                todo.name.includes(searchText) && 
                (status === 'Completed'
                    ? todo.completed
                    : !todo.completed
                ) && 
                (priorities.length
                    ? priorities.includes(todo.priority)
                    : true
                )
            )
        }
    })
    return todoRemaining
}

// import { createSelector } from "@reduxjs/toolkit";

// export const searchTextSelector = (state) => state.filters.search
// export const filterStatusSelector = (state) => state.filters.status
// export const filterPrioritiesSelector = (state) => state.filters.priorities
// export const todoListSelector = (state) => state.todoList;

// export const todoRemainingSelector = createSelector(
//     todoListSelector,
//     filterStatusSelector,
//     searchTextSelector,
//     filterPrioritiesSelector,
//     (todoList, status, searchText, priorities) => {
//         return todoList.filter((todo) => {
//             if(status === 'All') {
//                 return ( priorities.length 
//                     ? todo.name.includes(searchText) && priorities.includes(todo.priority)
//                     : todo.name.includes(searchText)
//                 )
//             } 
//             return (
//                 todo.name.includes(searchText) && 
//                 (status === 'Completed'
//                     ? todo.completed
//                     : !todo.completed
//                 ) && 
//                 (priorities.length
//                     ? priorities.includes(todo.priority)
//                     : true
//                 )
//             )
//         })
//     }
// )