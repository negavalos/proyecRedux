import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/accions/actions'
import TodoList from '../pure/TodoList'


//filter todo list 
const filterTodos = (todos, filter)=>{
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo)=> !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo)=> todo.completed);
    
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos:  filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) =>{
            dispatch(toggleTodo(id))
        }
    }
}

//we connect State 6 dispatch to todolist's props
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodosContainer;