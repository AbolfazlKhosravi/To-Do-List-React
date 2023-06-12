import Navbar from "./Navber";
import TodoForm from "./TodoForms";
import TodoList from "./TodoList";
import React from "react";
const TodoApp = () => {
    return ( 
        <div className='flex flex-col items-center justify-between bg-gray-800 p-4 rounded-lg'>
            <Navbar />
            <TodoForm />
            <TodoList/>
        </div>
     );
}
 
export default React.memo(TodoApp);