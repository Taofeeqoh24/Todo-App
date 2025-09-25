import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../api/fetchapi";

interface DeleteTodoProps {
  id: number;
}

function DeleteTodoModal({ id }: DeleteTodoProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this todo?")) {
      mutation.mutate(id);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-sm bg-red-600 text-white p-1 border rounded-lg w-14 hover:bg-red-700"
      disabled={mutation.isPending}
    >
        {mutation.isPending ? "..." : "Delete"}
    </button>
  );
}

export default DeleteTodoModal;
