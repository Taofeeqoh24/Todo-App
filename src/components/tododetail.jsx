import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTodoById } from '../api/fetchapi';

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodoById(id),
  });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError) return <div className="p-4 text-red-500">Error loading todo</div>;

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{data.todo}</h2>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Task:</strong> {data.todo}</p>
      <p>
        <strong>Status:</strong>{' '}
        <span className={data.completed ? 'text-green-600' : 'text-yellow-600'}>
          {data.completed ? 'Completed' : 'Pending'}
        </span>
      </p>
      <p><strong>User ID:</strong> {data.userId}</p>

      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ← Back
      </button>
    </div>
  );
}

export default TodoDetail;
