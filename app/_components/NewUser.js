import Link from "next/link";

function NewUser() {
  return (
    <div className="flex flex-col space-y-3">
      <p className="font-semibold text-2xl text-accent-400">
        Seems you are here for the first time! 🎉 <br />{" "}
      </p>
      <p className="text-lg">
        {" "}
        You will be able to update your personal information after you{" "}
        <Link className="underline text-accent-500" href="/cabins">
          make your first booking &rarr;{" "}
        </Link>
      </p>
    </div>
  );
}

export default NewUser;
