import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">To-Do App</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/add">Add Task</Link>
      </div>
    </nav>
  );
}

export default Header;
