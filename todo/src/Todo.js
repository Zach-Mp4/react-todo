import React, { useState } from "react";

function Todo({ task = "default todo", id = "1", remove, update }) {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => remove(id);

  // default todo view
  let jsx = (
    <div>
      <li>{task}</li>
      <button onClick={handleDelete}>X</button>
    </div>
  );

  return jsx;
}

export default Todo;
