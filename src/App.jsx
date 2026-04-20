import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a Todo App" },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // Add todo
  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const addTodo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };

    setTodos([...todos, addTodo]);
    setNewTodo("");
  };

  // Delete todo

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  //handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <section id="header">
        <h1>Individual Todo List</h1>
      </section>

      {/* Input section */}
      <section id="todo-section">
        <div id="input-section">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter a new todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={addTodo}>Add Todo</button>
          </div>
        </div>

        {/* Todo list section */}
        <section id="todo-list-section">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className={todo.completed ? "completed" : ""}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}

export default App;
