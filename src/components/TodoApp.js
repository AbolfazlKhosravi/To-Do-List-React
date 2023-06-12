import Navbar from "./Navber";
import TodoForm from "./TodoForms";
import TodoList from "./TodoList";
import React, { useState } from "react";
const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("");

  return (
    <div className="flex flex-col items-center justify-between bg-gray-800 p-4 rounded-lg">
      <Navbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        select={select}
        setSelect={setSelect}
      />
      <TodoForm />
      <TodoList inputValue={inputValue} select={select} />
    </div>
  );
};

export default React.memo(TodoApp);
