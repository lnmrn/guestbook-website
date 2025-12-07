import { getCabin, getCabinsIds } from "@/app/_lib/data-service";
import { Suspense } from "react";

import ReservationSection from "@/app/_components/ReservationSection";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabinsIds = await getCabinsIds();
  const ids = cabinsIds.map((obj) => ({
    cabinId: String(obj.id),
  }));

  return ids;
}

async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center text-accent-400">
          Reserve Cabin {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <ReservationSection cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
