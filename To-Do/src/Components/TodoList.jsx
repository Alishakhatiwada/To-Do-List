function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border p-3 flex justify-between items-center"
        >
          <div>
            <h3 className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </h3>
            <p className="text-sm text-gray-500">{todo.description}</p>
          </div>

          <div className="space-x-2">
            <button
              onClick={() => onToggle(todo.id)}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Done
            </button>

            <button
              onClick={() => onDelete(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;