import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/fetchapi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search";
import FilterControls from "./filter";
import EditTodoModal from "./modals/edittodo";

function TodoList({ todos, setTodos }) {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos", page],
    queryFn: () => fetchTodos(page),
    keepPreviousData: true,
  });

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (isError)
    return (
      <div className="text-center p-4 text-red-500">Error loading todos</div>
    );

  const totalPages = Math.ceil(data.total / 10);

  const filteredTodos = data.data.filter((todo) => {
    const matchesSearch = todo.todo
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all"
        ? true
        : filterStatus === "completed"
        ? todo.completed
        : !todo.completed;

    return matchesSearch && matchesFilter;
  });

  const handleOpenEdit = (todo) => {
    setSelectedTodo(todo);
    setShowEdit(true);
  };

  const handleEditSubmit = (updatedTodo) => {
    if (!todos) return;

    const updatedList = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedList);
  };

  return (
    <div className=" border rounded-xl p-2 bg-[#192655] mt-[10px] m-4">
      <div className="flex justify-between max-lg:flex-col">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterControls
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </div>
      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="m-4 p-2 rounded-lg flex justify-between items-center bg-white hover:bg-[#F3F0CA] shadow"
          >
            <Link to={`/todos/${todo.id}`} key={todo.id}>
              <div>
                <span
                  className={`text-[12px] p-2 ${
                    todo.completed ? "text-[#3876BF]" : "text-yellow-600"
                  }`}
                >
                  <button className="bg-[#F3F0CA] rounded-lg p-1.5">
                    {todo.completed ? "Completed" : "Pending"}
                  </button>
                </span>
                <span>{todo.todo}</span>
              </div>
            </Link>
            <div>
              <span className="max-lg:flex flex-col">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleOpenEdit(todo);
                  }}
                  className="text-sm border hover:underline rounded-lg m-2 p-1 w-14"
                >
                  Edit
                </button>
                <EditTodoModal
                  isOpen={showEdit}
                  onClose={() => setShowEdit(false)}
                  todo={selectedTodo}
                  onEdit={handleEditSubmit}
                />
                <button className="text-sm bg-red-600 text-white p-1 border rounded-lg w-14">
                  Delete
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-between m-4 mt-6 space-x-2">
        <button
          className="text-sm px-3 py-1 bg-[#F3F0CA] rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="bg-[#F3F0CA] px-3 py-1">{`${page} of 20`}</span>
        <button
          className="px-3 text-sm py-1 bg-[#F3F0CA] rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TodoList;
