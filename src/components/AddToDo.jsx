import { useState } from "react";


const AddToDo = ({ AddToDo, todos }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [key, setKey] = useState(todos[todos.length - 1]?.id || 0); // unique key for each todo

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError('Todo cannot be empty');
      return;
    }
    if (todos.find((todo) => todo.text === input)) {
      setError('Todo already exists, add some other');
      return;
    }
    AddToDo([...todos, { text: input, completed: false, id: key + 1 }]);
    setKey(key + 1);
    setInput('');
    setError('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form" autoComplete="off">
        <div className="input-wrapper">
          <input
            type="text"
            id="todo"
            placeholder=" "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="todo-input"
          />
          <label
            htmlFor="todo"
            className={`todo-label ${error ? 'error' : ''}`}
          >
            Add a To Do
          </label>
        </div>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      {error && <p className="error-text">{error}</p>}
    </>
  );
};

export default AddToDo;
