
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useState } from 'react';

export const fetchData=createAsyncThunk("Todos/fetchData", async(_,{rejectWithValue})=>{
 try {
  const data= await axios.get("http://localhost:3001/todos");
  return data.data
 } catch (error) {
  return rejectWithValue(error)
 }
})
export const addAsyncTodo=createAsyncThunk("Todos/addAsyncTodo", async(payload,{rejectWithValue})=>{
  try {
   const data= await axios.post("http://localhost:3001/todos",{
    title:payload.title,
    completed:false
   });
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
 })
export const removeAsyncTodo=createAsyncThunk("Todos/removeAsyncTodo", async(payload,{rejectWithValue})=>{
  try {
    await axios.delete(`http://localhost:3001/todos/${payload.id}`)
   return {id:payload.id}
  } catch (error) {
   return rejectWithValue(error)
  }
})
export const toggleAsyncTodo=createAsyncThunk("Todos/toggleAsyncTodo", async(payload,{rejectWithValue})=>{
  try {
   const data= await axios.put(`http://localhost:3001/todos/${payload.id}`,{
      title:payload.title,
      completed:payload.completed
    })
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
})
export const edditAsyncTodo=createAsyncThunk("Todos/edditAsyncTodo", async(payload,{rejectWithValue})=>{
  try {
   const data= await axios.put(`http://localhost:3001/todos/${payload.id}`,{
      title:payload.title,
      completed:payload.completed
    })
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
})
export const multipleFilterAsynchTodos=createAsyncThunk("Todos/searchAsynchTodos", async(payload,{rejectWithValue})=>{
  try {
   const data= await axios.get("http://localhost:3001/todos");
   return {todos:data.data,title:payload.title,selected:payload.selected}
  } catch (error) {
   return rejectWithValue(error)
  }
})

const initialState = {
  data:null,
  error:null,
  loding:false,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers:(builder)=> {
    builder.addCase(fetchData.pending,(state,action)=>{
      return {...state,data:null,loding:true,error:null}
    })
    builder.addCase(fetchData.fulfilled,(state,action)=>{
      return {...state,data:action.payload,loding:false,error:null}
    })
    builder.addCase(fetchData.rejected,(state,action)=>{
      return {...state,data:null,loding:false,error:action.payload.message}
    })
    builder.addCase(addAsyncTodo.fulfilled,(state,action)=>{
       state.data.push(action.payload)
    })
    builder.addCase(removeAsyncTodo.fulfilled,(state,action)=>{
      state.data=state.data.filter((t)=>t.id!==action.payload.id)
   })
   builder.addCase(toggleAsyncTodo.fulfilled,(state,action)=>{
    const todo=state.data.find((t)=>t.id==action.payload.id);
    todo.completed=action.payload.completed
   })
   builder.addCase(edditAsyncTodo.fulfilled,(state,action)=>{
    const todo=state.data.find((t)=>t.id==action.payload.id);
    todo.title=action.payload.title
   })
   builder.addCase(multipleFilterAsynchTodos.fulfilled,(state,action)=>{
    const todosFiltered=action.payload.todos.filter((t)=>{
       return t.title.toLowerCase().includes(action.payload.title.toLowerCase())
    })
    switch (action.payload.selected) {
      case "completed":{
         const filtered = todosFiltered.filter(t=>t.completed)
         state.data=filtered
         return
      }
      case "inCompleted":{
        const filtered = todosFiltered.filter(t=>!t.completed)
         state.data=filtered
         return
      }
      default: {
        const filtered=todosFiltered;
        state.data=filtered
        return 
      }
     }
   })
  }
})
export default todosSlice.reducer;