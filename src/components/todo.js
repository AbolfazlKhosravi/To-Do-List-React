import { FaTrashAlt,FaCheckSquare,FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeAsyncTodo, toggleAsyncTodo } from "../featuers/todos/todosReducer";
const Todo = ({title,id,completed,setShow}) => {
  const dispatch=useDispatch()
  return (
    <div className="bg-white w-72 flex  px-2 py-1 rounded-sm mt-2 justify-between items-center md:w-96 md:h-10">
      <p className={`text-gray-900 font-bold md:text-lg ${completed?'line-through':""} ${completed?'opacity-40':""}`}>{title}</p>
      <div className="flex items-center justify-between">
        <button className="text-blue-700 text-lg">
        <FaCheckSquare onClick={()=>dispatch(toggleAsyncTodo({id,title,completed:!completed}))}/>
        </button>
        <button className="text-green-700 ml-2 text-lg">
        <FaEdit onClick={()=>setShow({id,show:true,title,completed})}/>
        </button>
        <button className="text-red-700 ml-2 text-[1rem]">
        <FaTrashAlt onClick={()=>dispatch(removeAsyncTodo({id:id}))}/>
        </button>
      </div>
    </div>
  );
};

export default Todo;
