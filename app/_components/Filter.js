"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import FilterButton from "./FilterButton";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filterValue) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filterValue);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        filterValue="all"
        onClick={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </FilterButton>

      <FilterButton
        filterValue="small"
        onClick={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </FilterButton>

      <FilterButton
        filterValue="medium"
        onClick={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </FilterButton>

      <FilterButton
        filterValue="large"
        onClick={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </FilterButton>
    </div>
  );
}

export default Filter;
