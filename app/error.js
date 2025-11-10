"use client";

import ErrorActionButton from "./_components/ErrorActionButton";

function Error({ error, resetBoundary }) {
  return (
    <div className="flex justify-center items-center flex-col gap-6 mt-20">
      <h1 className="text-3xl font-semibold">Oops, someone slipped!</h1>
      <p className="text-lg">We apologize 🙏🏽</p>
      {console.log("Boundary error: ", error.message)}
      <div className="flex gap-8">
        <ErrorActionButton />
        <button
          className="rounded-sm inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
          onClick={resetBoundary}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default Error;
