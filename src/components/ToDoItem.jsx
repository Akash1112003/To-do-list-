import { useState } from "react";


const ToDoItem = ({ todo, handleDelete, markCompleted, handleEdit }) => {
  const [completed, setCompleted] = useState(todo.completed);
  const [todoState, setTodoState] = useState(todo.text);
  const [edit, setEdit] = useState(false);

  const editText = () => {
    setEdit(!edit);
  };

  return (
    <div className="todo-item">
      {completed && (
        <div className="completed-icon">
          {/* Your SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <defs>
              <linearGradient id="tickBg" x1="9.858" x2="38.142" y1="9.858" y2="38.142">
                <stop offset="0" stopColor="#9dffce" />
                <stop offset="1" stopColor="#50d18d" />
              </linearGradient>
              <linearGradient id="tickCheck" x1="13" x2="36" y1="24.793" y2="24.793">
                <stop offset=".824" stopColor="#135d36" />
                <stop offset=".931" stopColor="#125933" />
                <stop offset="1" stopColor="#11522f" />
              </linearGradient>
            </defs>
            <path fill="url(#tickBg)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
            <path
              fill="url(#tickCheck)"
              d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414
                 c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879
                 c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414
                 c0.391,0.391,0.391,1.024,0,1.414l-13,13
                 C22.317,33.098,21.683,33.098,21.293,32.707z"
            />
          </svg>
        </div>
      )}

      {edit ? (
        <input
          className="todo-input"
          type="text"
          value={todoState}
          onChange={(e) => setTodoState(e.target.value)}
        />
      ) : (
        <p className="todo-text">{todoState}</p>
      )}

      <button className="button button-red" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>

      <button
        className="button button-blue"
        onClick={() => {
          if (edit) handleEdit(todo.id, todoState);
          editText();
        }}
      >
        {edit ? "Save" : "Edit"}
      </button>

      <button
        className="button button-green"
        onClick={() => {
          setCompleted(!completed);
          markCompleted(todo.id);
        }}
      >
        {completed ? "Mark Pending" : "Mark Done"}
      </button>
    </div>
  );
};

export default ToDoItem;
