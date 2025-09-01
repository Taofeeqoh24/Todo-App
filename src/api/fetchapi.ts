import axios from 'axios';


interface Todo {
  id: number;
  todo: string
}

interface TodosResponse {
  data: Todo[];
  total: number;
}

export const fetchTodos = async (page: number = 1): Promise<TodosResponse> => {
  const limit = 10;
  const skip = (page - 1) * limit;
  try {
    const response = await axios.get(
     `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
    );
    return {
      data: response.data.todos,
      total: response.data.total,
    };
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
};


export const fetchTodoById = async (id: number) => {
  const res = await axios.get(`https://dummyjson.com/todos/${id}`);
  return res.data;
};