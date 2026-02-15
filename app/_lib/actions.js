"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateForm({ formData }) {
  const session = await auth();

  if (!session) throw new Error("Unauthorized access.");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[A-Za-z0-9]{5,17}$/.test(nationalID))
    throw new Error("Please provider a valid national ID.");

  const updateData = { nationality, countryFlag, nationalID };
  await updateGuest(session.guestId, updateData);

  revalidatePath("/account/profile");
}
