import React, { useState } from 'react'



const App: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  // --- C: Create ---
  const addTodo = (text: string) => {
    const newTodo: Task = {
      id: Date.now(), // Simple unique ID
      text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoText(''); // Clear input field
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;
    addTodo(newTodoText);
  };

  // --- R: Read (handled by React's rendering of the 'todos' state) ---

  // --- U: Update ---
  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // --- D: Delete ---
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
