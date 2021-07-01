import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './reducer/todosSlice'


// store
const store = configureStore({
    reducer:{
        todosReducer
    }

})

export default store