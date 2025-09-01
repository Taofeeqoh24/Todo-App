interface FilterControlsProps {
  filterStatus: string; 
  setFilterStatus: (status: "all" | "completed" | "pending") => void;
}

function FilterControls({ filterStatus, setFilterStatus }: FilterControlsProps) {
  return (
    <div className="m-4 mt-[36px] flex gap-2 max-lg:mt-[-6px]">
      <button
        className={`h-min px-3 py-1 rounded ${filterStatus === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilterStatus('all')}
      >
        All
      </button>
      <button
        className={`h-min px-3 py-1 rounded ${filterStatus === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilterStatus('completed')}
      >
        Completed
      </button>
      <button
        className={`h-min px-3 py-1 rounded ${filterStatus === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilterStatus('pending')}
      >
        Pending
      </button>
    </div>
  );
}

export default FilterControls;
