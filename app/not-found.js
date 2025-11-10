import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col text-center items-center space-y-6 mt-10">
      <h1 className="text-3xl font-semibold">
        You wandered off familiar path!
      </h1>

      <p className="text-lg">This page could not be found! </p>

      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go home
      </Link>
    </div>
  );
}

export default NotFound;
