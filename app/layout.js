import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Guestbook",
    default: "Guestbook Outdoors 🌲",
  },
  description:
    "Some nice description about your hotel/hostel or similar service.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <footer className="mx-auto py-3 z-10">
          Copyright &#169; Dishpet 2025. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
