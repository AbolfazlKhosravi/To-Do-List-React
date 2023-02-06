import { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addAsyncTodo, edditAsyncTodo } from "../featuers/todos/todosReducer";
const TodoForm = ({show,setShow}) => {
 const [value,setValue]=useState(show?show.title:"");
 const dispatch=useDispatch();
 const inputRef=useRef();
 useEffect(()=>{
  inputRef.current.focus()
 },[])
  const updateHandler = (e) => {
    e.preventDefault();
    if (value == "") {
      alert("writing to form");
      return;
    } 
    if(show){
      setShow({show:false,id:null,title:"",completed:false})
      dispatch(edditAsyncTodo({title:value,completed:show.completed,id:show.id}))
       return
    }
    dispatch(addAsyncTodo({title:value}))
    setValue("");
  };
  return (
    <form onSubmit={updateHandler} className="mt-4 bg-white w-72 flex justify-between items-center px-2 py-1 rounded-sm font-bold md:w-96 md:h-10 md:text-sm">
      <input
        onChange={(e)=>setValue(e.target.value)}
        value={value}
        type="text"
        className="w-full focus:outline-none"
        placeholder="add somthing"
        ref={inputRef}
      />
      <button className="text-green-900" type="submit">
        {show?<p className="bg-gray-900   px-1 py-1 rounded-sm md:px-2 md:py-1 md:rounded-xl text-white">update</p>:<FaPlusCircle className="text-lg fa-sharp fa-solid fa-circle-plus" />}
      </button>
    </form>
  );
};

export default TodoForm;
