import { getCabin, getCabinsIds } from "@/app/_lib/data-service";
import {
  BanknotesIcon,
  EyeSlashIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import TextExpander from "@/app/_components/TextExpander";
import Image from "next/image";

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
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.04] -translate-x-8">
          <Image
            src={image}
            fill
            alt={`Cabin ${id}`}
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-33px] bg-primary-950 p-6 pb-1 ">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UserGroupIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">Located in the heart of the </span>
              <span className="font-bold">Dolomites</span> (Italy)
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <BanknotesIcon className="h-5 w-5 text-primary-600" />
              {/* could extract this into it's own component later for readability */}
              <span className="text-lg">
                {discount > 0 ? (
                  <>
                    <span className="text-2xl font-[350]">
                      ${regularPrice - discount}
                    </span>
                    <span className="line-through font-semibold text-primary-600">
                      {" "}
                      (${regularPrice})
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-[350]">${regularPrice}</span>
                )}{" "}
                <span className="text-primary-200">/ night</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}

export default Page;
