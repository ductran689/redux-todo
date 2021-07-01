import React from 'react'
import {useDispatch} from 'react-redux'
import {markComplete,deleteTodo} from '../store/reducer/todosSlice'
const TodoItems = ({ todo }) => {
    const title = todo.title

    const dispatch = useDispatch()
    const toggleTodo = (id) => {
        dispatch(markComplete(id))
    }

    const handleDelete = (id) => {
        dispatch (deleteTodo(id))
    }

    

    return (

        <li className={todo.completed ? "todo-completed" : ""} >
            <input type="checkbox" checked={todo.completed} onChange={toggleTodo.bind(this,todo.id)} />
            <p>{title}</p>
            <button onClick = {handleDelete.bind(this,todo.id)}>Delete</button>
        </li>

    )
}

export default TodoItems
