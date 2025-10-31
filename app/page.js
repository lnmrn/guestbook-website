import Link from "next/link";
import Navigation from "./_components/Navigation";

export default function Page() {
  return (
    <div>
      <h1>Guestbook. Booking with ease!</h1>

      <Link href="/cabins">Explore luxory accomodations</Link>
    </div>
  );
}
