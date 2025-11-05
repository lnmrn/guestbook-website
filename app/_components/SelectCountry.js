import { getCountries } from "../_lib/data-service";

async function SelectCountry(name, id, defaultCountry) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";
  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
    >
      <option value="">Select country...</option>
      {countries.map((country) => (
        <option key={country.name} value={`${country.name}%${country.flag}`}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
