import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadTodos, saveTodos } from "../Utils/Storage";

function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedTodos = loadTodos();
    setTodos(storedTodos);

    const todoToEdit = storedTodos.find(
      (t) => t.id === Number(id)
    );

    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDescription(todoToEdit.description);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTodos = todos.map((t) =>
      t.id === Number(id) ? { ...t, title, description } : t
    );

    saveTodos(updatedTodos);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Update Task
        </button>
      </form>
    </div>
  );
}

export default EditTodo;