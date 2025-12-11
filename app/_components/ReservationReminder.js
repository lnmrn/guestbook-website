"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useReservationContext } from "./ReservationContext";
import { format } from "date-fns";
import { XMarkIcon } from "@heroicons/react/24/solid";

function ReservationReminder() {
  const { range, resetRange } = useReservationContext();
  if (!range.from || !range.to) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-accent-500 text-primary-800 text  font-semibold shadow-xl shadow-slate-900 flex gap-5 items-center">
      <ClockIcon className="h-5 w-5 self-center" />
      <p>
        Don&#39;t forget to reserve your dates <br /> from{" "}
        <b>{format(new Date(range.from), "MMM dd yyyy")}</b> to {""}
        <b>{format(new Date(range.to), "MMM dd yyyy")}</b>
      </p>
      <button
        onClick={resetRange}
        className="rounded-full p-1 hover:bg-accent-600 transition-all"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
