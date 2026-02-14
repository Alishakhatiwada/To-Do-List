import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TodoList from "../Components/TodoList";
import { loadTodos } from "../Utils/Storage";

function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const location = useLocation();

  // Only LOAD. Do NOT auto-save here.
  useEffect(() => {
    setTodos(loadTodos());
  }, [location]);

  const deleteTodo = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const toggleTodo = (id) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const filteredTodos = todos.filter((t) => {
    const matchesSearch = (t.title || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Completed"
        ? t.completed
        : !t.completed;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>

      <input
        placeholder="Search by title..."
        className="border p-2 w-full mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 mb-4"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>

      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
}

export default Home;