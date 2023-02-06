import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../featuers/todos/todosReducer";
import Todo from "./todo";
import TodoForm from "./TodoForms";
const TodoList = () => {
  const {loding,error,data}=useSelector((state)=>state.todos);
  const [show,setShow]=useState({show:false,id:null,title:"",completed:false})
  const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(fetchData())
   },[]);

   if(loding)return<div className="text-white">loding...</div>
   if(error)return<div className="text-white">{error}</div>
   if(data){
   if(data.length==0) return <div className="text-white mt-4 bg-gray-800 px-8 py-2 rounded-sm font-bold">writing to form</div>;
   if(show.show)return <TodoForm setShow={setShow} show={show}/>
    return (
    <div>{data.map((d)=>(
      <Todo key={d.id} completed={d.completed} title={d.title} id={d.id} setShow={setShow}/> ))}   
     </div>
   )
   }
}

export default TodoList;