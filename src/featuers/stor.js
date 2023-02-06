import { configureStore } from '@reduxjs/toolkit'
import  todosSlice  from './todos/todosReducer'

const store = configureStore({
    reducer: {
        todos:todosSlice,
    },
})

export default store