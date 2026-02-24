import NewUser from "@/app/_components/NewUser";
import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

async function Page() {
  const session = await auth();

  //if the logged in user booked before, their data will be in the database
  //we will then merely pass that data as placeholders to the form
  //if the response is null, then the user never booked before and we will directed to do so.
  //new guest is only ever created upon new booking!
  const isGuest = session?.guestId !== null;
  const guestData = isGuest ? await getGuest(session?.user?.email) : null;

  const nationality = guestData?.nationality ?? "Afghanistan";

  return (
    <div>
      {isGuest && guestData ? (
        <div>
          <h2 className="font-semibold text-2xl text-accent-400 mb-4">
            Update your profile
          </h2>

          <p className="text-lg mb-8 text-primary-200">
            Providing the following information will make your check-in process
            faster and smoother. See you soon!
          </p>
          <UpdateProfileForm guestData={guestData}>
            <SelectCountry
              name="nationality"
              id="nationality"
              defaultCountry={nationality}
            />
          </UpdateProfileForm>
        </div>
      ) : (
        <NewUser />
      )}
    </div>
  );
}

export default Page;
