import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import { AuthProvider } from "./_components/AuthContext";
import { auth } from "./_lib/auth";

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

async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <AuthProvider session={session}>
          <Header />
          <div className="flex-1 px-8 grid">
            <ReservationProvider>
              <main className="max-w-7xl mx-auto w-full">{children}</main>
            </ReservationProvider>
          </div>
        </AuthProvider>
        <footer className="mx-auto py-3 z-10">
          Copyright &copy; Dishpet 2025. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
