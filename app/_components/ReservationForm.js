"use client";

import { useReservationContext } from "./ReservationContext";
import { createBookingWithGuest } from "../_lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import { useRouter } from "next/navigation";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservationContext();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const { maxCapacity, id } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;

  const bookingData = {
    startDate,
    endDate,
    cabinId: id,
  };

  function handleCreate(formData) {
    startTransition(async () => {
      const res = await createBookingWithGuest(bookingData, formData);
      if (res.success) {
        resetRange();
        router.push("/account/reservations");
      }
    });
  }

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as {user.name}</p>
        <div className="flex gap-4 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={handleCreate}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-md"
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes">
            Anything we should know about your stay?
          </label>
          <textarea
            name="notes"
            id="notes"
            placeholder="Any pets, allergies, special requirements, etc.?"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className="text-primary-300 text-base">Start by selecting dates</p>
          <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            {isPending ? <SpinnerMini /> : "Reserve now"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
