import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AddTodo from "./Pages/AddTodo";
import EditTodo from "./Pages/EditTodo";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
