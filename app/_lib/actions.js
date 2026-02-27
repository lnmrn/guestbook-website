"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  deleteBooking,
  getGuestIdByBookingId,
  updateBooking,
  updateGuest,
} from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateForm(formData) {
  const session = await auth();

  if (!session) throw new Error("Unauthorized access.");

  const nationalID = formData?.get("nationalID");
  const [nationality, countryFlag] = formData?.get("nationality").split("%");

  if (!/^[A-Za-z0-9]{5,17}$/.test(nationalID))
    throw new Error("Please provider a valid national ID.");

  const updateData = { nationality, countryFlag, nationalID };
  await updateGuest(session.guestId, updateData);

  revalidatePath("/account/profile");
}

export async function deleteReservation(id) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized action.");

  //need to make sure anyone logged in can only delete their own bookings
  const bookingGuestId = await getGuestIdByBookingId(id);
  if (bookingGuestId !== session.guestId)
    throw new Error(
      "Unauthorized action - you can only delete your own bookings.",
    );
  await deleteBooking(id);
  revalidatePath("/account/reservations");
}

export async function updateReservation(id, formData) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized action.");
  const numGuests = Number(formData.get("numGuests"));
  const notes = formData.get("notes");
  const updateFields = { numGuests, notes };
  await updateBooking(id, updateFields);
  revalidatePath(`/account/reservations/edit/${id}`);
}
