"use client";
import { useState } from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

const initialState = { from: undefined, to: undefined };

function RangeContainer({ settings, bookedDates, cabin }) {
  const [range, setRange] = useState(initialState);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px] mt-10 mb-5">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
        range={range}
        setRange={setRange}
      />
      <ReservationForm cabin={cabin} range={range}/>
    </div>
  );
}

export default RangeContainer;
