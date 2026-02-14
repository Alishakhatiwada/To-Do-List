import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadTodos, saveTodos } from "../Utils/Storage";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const todos = loadTodos();

    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    saveTodos([...todos, newTodo]);

    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Task</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;