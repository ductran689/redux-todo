import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { todosSelector,getTodo } from '../store/reducer/todosSlice'
import TodoForm from './TodoForm'
import TodoItems from './TodoItems'


const Todos = () => {

    const dispatch = useDispatch()
    // get todos list from Api
    useEffect(()=>{
        dispatch(getTodo())
    
    },[dispatch])
    
    const todos= useSelector(todosSelector)
    return (
        <div className="todo-list">
            <TodoForm/>
           <ul>
               
               {todos.map(todo => (<TodoItems key ={todo.id} todo={todo}/>))}
           </ul>
        </div>
    )
}

export default Todos
