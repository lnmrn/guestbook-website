import { getBookingWithMaxCapacity } from "@/app/_lib/data-service";
import { updateReservation } from "@/app/_lib/actions";
import UpdateReservationButton from "@/app/_components/UpdateReservationButton";

export default async function Page({ params }) {
  const reservationId = params?.reservationId;
  const booking = params
    ? await getBookingWithMaxCapacity(reservationId)
    : null;
  const maxCapacity = booking?.cabins.maxCapacity ?? 0;
  const { numGuests, notes } = booking;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <form
        action={updateReservation.bind(null, reservationId)}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            disabled={maxCapacity === 0}
            defaultValue={numGuests}
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
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
            maxLength={1000}
            defaultValue={notes}
            name="notes"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <UpdateReservationButton />
        </div>
      </form>
    </div>
  );
}
