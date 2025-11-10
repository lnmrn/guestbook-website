import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col text-center items-center space-y-6 mt-10">
      <h1 className="text-3xl font-semibold">
        You wandered off familiar path!
      </h1>

      <p className="text-lg">This accomodation does not exist! </p>

      <Link
        href="/cabins"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go to accomodation
      </Link>
    </div>
  );
}

export default NotFound;
