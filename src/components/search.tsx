interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

function SearchBar({searchTerm, setSearchTerm}: SearchBarProps) {
    return (
        <div className="m-4">
            <p className="text-white text-sm">Search and filter your todos</p>
            <input 
            className=" max-lg:w-80 p-2 w-150 border rounded-xl bg-[#F3F0CA]"
            type="text"
            placeholder="Search todos...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        
    )
}

export default SearchBar;