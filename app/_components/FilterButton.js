function FilterButton({ children, onClick, filterValue, activeFilter }) {
  return (
    <button
      onClick={() => onClick(filterValue)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        filterValue === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
