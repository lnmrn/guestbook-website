import Link from "next/link";
import SignInButton from "../_components/SignInButton";

export default function Page() {
  return (
    <div className="relative w-full flex items-start justify-center">
      <Link
        href={"/about"}
        className="absolute left-0 -translate-x-full -ml-4 mb-[20px] border-b border-b-accent-400 text-accent-400"
      >
        &#8592; Back
      </Link>
      <div className="inline-flex flex-col gap-10 mt-10 items-center border border-primary-300 rounded-md px-8 py-6">
        <h2 className="text-3xl font-semibold">
          Sign in to access your guest area
        </h2>
        <SignInButton />
      </div>
    </div>
  );
}
