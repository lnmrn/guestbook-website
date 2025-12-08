import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import RangeContainer from "./RangeContainer";
import ReservationForm from "./ReservationForm";

async function ReservationSection({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <RangeContainer
      settings={settings}
      bookedDates={bookedDates}
      cabin={cabin}
    />
  );
}

export default ReservationSection;
