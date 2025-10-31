import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        quality={70}
        width="60"
        height="60"
        alt="Guestbook logo"
      />
      <span className="rounded-md text-xl font-semibold text-primary-100">
        Guestbook
      </span>
    </Link>
  );
}

export default Logo;
