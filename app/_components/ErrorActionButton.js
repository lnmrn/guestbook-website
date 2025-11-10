"use client";

import { useRouter } from "next/navigation";

function ErrorActionButton() {
  const router = useRouter();
  return (
    <div className="flex gap-8">
      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={() => router.back()}
      >
        Go back
      </button>
      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg rounded-sm"
        onClick={() => router.replace("/")}
      >
        Go home
      </button>
    </div>
  );
}

export default ErrorActionButton;
