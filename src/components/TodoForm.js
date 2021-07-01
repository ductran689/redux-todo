import React, { useState } from 'react'
import {addTodo} from '../store/reducer/todosSlice'
import {useDispatch} from 'react-redux'
const TodoForm = () => {
    const [title,setTitle] =useState('')

    const changeTitle = (e) => {
        setTitle(e.target.value)
        
    }

    const dispatch =useDispatch()
    const addSingleTodo = (e) =>{
        e.preventDefault()
        if(title!=='')  // title !=='' moi add ko thi ko add
        dispatch(addTodo(title))
        setTitle('')
    }
    return (
        <div >
            <form className="todo-form" onSubmit={addSingleTodo}>
                <input type="text"
                value ={title} // binding 2 chieu 
                onChange={changeTitle}
                className="text-input" />
                <input type="submit" value="Add"  className="add-btn"/>
            </form>
        </div>
    )
}

export default TodoForm
