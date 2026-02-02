"use client";
import Link from "next/link";
import { useAuthContext } from "./AuthContext";
import { useState } from "react";

function Navigation() {
  const { session } = useAuthContext();

  //a minor fix for the default img not rendering in some cases
  const initialAvatar =
    session?.user?.image &&
    session?.user?.image !== "null" &&
    session?.user?.image !== "undefined"
      ? session?.user?.image
      : "/default-profile.jpg";

  const [imgSrc, setImgSrc] = useState(initialAvatar);

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
                <img
                  className="h-7 rounded-full"
                  src={imgSrc}
                  key={session.user?.image}
                  alt={session.user.name || "User avatar"}
                  onError={() => {
                    setImgSrc("/default-profile.jpg");
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
