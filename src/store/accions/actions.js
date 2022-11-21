//incremental ID for todos
let nextTodoId = 0;

//Actions types:
export const ADD_TODO = 'ADD_TODO' ;
export const TOGGLE_TODO = 'TOGGLE_TODO' ;
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER' ;

/**
 * 
 * @param {*} text 
 * @returns action ADD_TODO
 */

export const addTodo = (text) =>{
    return{
        type: ADD_TODO,
        payload: {
            id: nextTodoId++,
            text
        }
    }
}
/**
 * 
 * @param {number} id 
 * @returns actions TOGGLE_TODO
 */
export const toggleTodo = (id) =>{
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}
/**
 * 
 * @param {string} filter 
 * @returns actionss SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) =>{
    return{
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}