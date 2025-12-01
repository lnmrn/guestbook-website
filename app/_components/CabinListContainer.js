import { getCabins } from "../_lib/data-service";
import CabinList from "./CabinList";

export default async function CabinListContainer({ filterValue }) {
  const cabins = await getCabins();
  return <CabinList filterValue={filterValue} cabins={cabins} />;
}
