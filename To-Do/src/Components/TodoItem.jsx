import { Link } from "react-router-dom";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div
      className={`p-4 rounded shadow flex justify-between items-center ${
        todo.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div>
        <h2 className="font-bold">{todo.title}</h2>
        <p className="text-sm">{todo.description}</p>

        <p className="text-xs mt-1">
          Status: {todo.completed ? "Completed ✅" : "Pending ⏳"}
        </p>
      </div>

      <div className="space-x-2">
        <button
          onClick={() => onToggle(todo.id)}
          className="px-2 py-1 bg-yellow-400 rounded"
        >
          Toggle
        </button>

        <Link
          to={`/edit/${todo.id}`}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(todo.id)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
