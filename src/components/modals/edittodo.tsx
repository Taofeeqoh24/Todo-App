import React, { useState } from 'react';
import axios from 'axios';

function EditTodoModal({ isOpen, onClose, todo, onEdit }) {
  const [title, setTitle] = useState(todo?.todo || "");

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`https://dummyjson.com/todos/${todo.id}`, {
        todo: title,
      });
      onEdit(response.data);
      onClose();
      console.log(response.data);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  if (!isOpen) return null;

  const handleEdit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onEdit({ ...todo, todo: title });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(59,130,246,0.08)] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <div className="flex justify-end gap-2">
            <button onClick={onClose} type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancel
            </button>
            <button onClick={handleSubmit} type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTodoModal;
