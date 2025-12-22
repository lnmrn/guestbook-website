"use client";
import Link from "next/link";
import { useAuthContext } from "./AuthContext";

function Navigation() {
  const { session } = useAuthContext();
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
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              <div className="flex gap-2 items-center">
                Guest area
                <img
                  src={session.user.image}
                  alt={session.user.name}
                  className="h-7 rounded-full"
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
