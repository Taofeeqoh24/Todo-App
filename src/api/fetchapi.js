import axios from 'axios';

export const fetchTodos = async (page = 1) => {
  const limit = 10;
  const skip = (page - 1) * limit;
  const response = await axios.get(
     `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
  );
  return {
    data: response.data.todos,
    total: response.data.total,
  };
};

export const fetchTodoById = async (id) => {
  const res = await axios.get(`https://dummyjson.com/todos/${id}`);
  return res.data;
};