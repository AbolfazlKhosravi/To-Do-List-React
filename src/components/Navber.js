import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { multipleFilterAsynchTodos } from "../featuers/todos/todosReducer";
import React from "react";
import { useCallback } from "react";
const Navbar = () => {
  const { data, loding } = useSelector((state) => state.todos);
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();
  const options = [
    { value: "", label: "All" },
    { value: "completed", label: "completed" },
    { value: "inCompleted", label: "inCompleted" },
  ];
  useEffect(() => {
    dispatch(
      multipleFilterAsynchTodos({ selected: select.value, title: inputValue })
    );
  }, [data&&data.length]);
  const selectedOption = (selectedOption) => {
    setSelect(selectedOption);
    dispatch(
      multipleFilterAsynchTodos({
        selected: selectedOption.value,
        title: inputValue,
      })
    );
  };
  const unDownHandler = () => {
    return data.filter((d) => !d.completed).length;
  };
  const serchHandler = (e) => {
    setInputValue(e.target.value);
    dispatch(
      multipleFilterAsynchTodos({
        title: e.target.value,
        selected: select.value,
      })
    );
  };
  if (data && data.length == 0 && !inputValue && !select)
    return (
      <h2 className="text-white mb-5 bg-gray-800 px-8 py-2 rounded-sm font-bold">
        set today Todos
      </h2>
    );
  if (data)
    return (
      <header className="flex flex-col gap-2 items-center mb-4 md:mb-8 md:gap-3">
        <div>
          <p className="text-white text-sm md:text-[1rem]">
            Undone work :
            <span className="ml-1" id="undoneWork">
              {unDownHandler()}
            </span>
          </p>
        </div>
        <div className="relative w-[16rem] h-8 mb-2 md:mb-0 md:w-[21rem] md:h-10 ">
          <Select
            className="w-full rounded-sm px-2 h-full text-gray-900 text-md font-bold "
            value={select}
            onChange={selectedOption}
            options={options}
          />
        </div>
        <div>
          <input
            onChange={serchHandler}
            value={inputValue}
            type="text"
            id="serch"
            className="w-60 py-1 px-2 rounded-sm md:w-[20rem] md:h-10"
            placeholder="search for ..."
          />
        </div>
      </header>
    );
};
export default React.memo(Navbar);
