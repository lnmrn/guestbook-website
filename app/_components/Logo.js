import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" width="60" height="60" alt="Guestbook logo" />
      <span className="text-xl font-semibold text-primary-100">Guestbook</span>
    </Link>
  );
}

export default Logo;
