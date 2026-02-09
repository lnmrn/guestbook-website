"use client";
import Link from "next/link";
import { useAuthContext } from "./AuthContext";
import { useState } from "react";
import Image from "next/image";

function Navigation() {
  const { session } = useAuthContext();

  const validAvatar = session?.user?.image
    ? `${session.user.image}?v=${session.user.image}`
    : null;

  console.log(validAvatar);

  const [hasError, setHasError] = useState(false);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center sm:gap-6">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/reviews"
            className="hover:text-accent-400 transition-colors"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              <div className="flex gap-2 items-center">
                Guest area
                <Image
                  className="rounded-full"
                  width={30}
                  height={30}
                  priority={false}
                  src={hasError ? "/default-profile.jpg" : session.user.image}
                  // src={
                  //   hasError || !validAvatar
                  //     ? "/default-profile.jpg"
                  //     : validAvatar
                  // }
                  key={validAvatar}
                  alt={session.user.name || "User avatar"}
                  onError={() => {
                    setHasError(true);
                  }}
                />
              </div>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
