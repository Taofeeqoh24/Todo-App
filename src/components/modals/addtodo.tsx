import React from 'react';

function AddTodoModal({ isOpen, onClose, onSubmit }) {
  const [todoText, setTodoText] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    onSubmit(todoText);
    setTodoText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#3b82f63b] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Add New Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Enter your task"
            className="w-full p-2 border rounded mb-4"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodoModal;
