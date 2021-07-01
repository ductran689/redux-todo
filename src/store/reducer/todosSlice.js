import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

// create thunk

// get todo
export const getTodo = createAsyncThunk('todos/todoFetched', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return res.data
})

// addTodo
export const addTodo = createAsyncThunk('todos/todoAdded', async (title) => {

    const newTodo = {
        id: nanoid(),
        title,
        completed: false
    }
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
    return newTodo
})
// delete todo
export const deleteTodo = createAsyncThunk('todos/tododeleted', async (todoId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    return todoId
})
// markComplete
export const markComplete = createAsyncThunk('todos/todoCompleted', async (todoId) => {

    await axios.post('https://jsonplaceholder.typicode.com/todos')
    return todoId
})

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: [

        ]
    },
    reducers: {
        // addTodo: {
        //     reducer(state,action) {
        //         state.allTodos.unshift(action.payload)

        //     },
        //     prepare(title) {  // title đc truyển trong addTodo(title) sẽ là parameter của prepare
        //         return {
        //             payload:{   // payload này sẽ đc móc ra trong action.payload
        //                 id: nanoid(),
        //                 title,
        //                 completed:false
        //             }
        //         }
        //     }

        // },
    //      markComplete : (state,action) => {
    //          const todoId= action.payload
    //          state.allTodos = state.allTodos.map(todo => {
    //             if(todo.id === todoId) todo.completed = ! todo.completed
    //             return todo
    //         })


    // }
    // deleteTodo: (state,action) => {
    //     const todoId = action.payload
    //     state.allTodos = state.allTodos.filter (todo => todo.id !== todoId)
    // }

},
    extraReducers: {
    //get todo
    [getTodo.fulfilled]: (state, action) => {
        state.allTodos = action.payload
    },
    // add todo
    [addTodo.fulfilled]: (state, action) => {
        state.allTodos.unshift(action.payload)
    },
    // delete todo
    [deleteTodo.fulfilled]: (state, action) => {
        const todoId = action.payload
        state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
    },
    // markcomplete
    [markComplete.fulfilled]: (state,action) => {
        const todoId = action.payload
        state.allTodos.map(todo => {
            if(todo.id === todoId) todo.completed = !todo.completed
            return todo})
        
    }
}
});

// Reducer use to change state
const todosReducer = todoSlice.reducer
// selector
export const todosSelector = state => state.todosReducer.allTodos
// action export
export const {
    // markComplete,
    // deleteTodo,
    // addTodo
} = todoSlice.actions


export default todosReducer
