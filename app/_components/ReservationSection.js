import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

function ReservationSection() {
  //will fetch here!!
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px] mt-10 mb-5">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}

export default ReservationSection;
