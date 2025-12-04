import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

function Page() {
  //temp value
  const nationality = "portugal";
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;
