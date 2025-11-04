import bg from "public/bg.png";
import Link from "next/link";
import Image from "next/image";

//home page
export default function Page() {
  return (
    <div className="mt-28">
      <Image
        src={bg}
        alt="A foresty mountain with one cabin"
        fill
        placeholder="blur"
        quality={90}
        className="object-cover object-top"
      />
      <div className="z-10 relative text-center">
        <h1 className="text-8xl text-primary-50 tracking-tight font-normal mb-10 ">
          Guestbook Outdoors. Booking with ease!
        </h1>

        <Link
          href="/cabins"
          className="rounded-md bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxory accomodations
        </Link>
      </div>
    </div>
  );
}
