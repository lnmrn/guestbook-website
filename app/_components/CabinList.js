import CabinCard from "../_components/CabinCard";

function CabinList({ filterValue, cabins }) {
  if (!cabins.length) return null;

  //filtring for capacity, will change later
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "small")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filterValue === "medium")
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filterValue === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
