import Image from "next/image";
import about1 from "/public/about-1.jpg";
import about2 from "/public/about-2.jpg";
import Link from "next/link";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center mt-5">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Guestbook Outdoors
        </h1>
        <div className="space-y-8">
          <p>
            Guestbook Outdoors was made to make reservation management,
            accomodation representation, reviewing, Q&A and general booking
            process smooth, easy and available to everyone. This web application
            serves as a mock up for any company that would rely on
            Guestbook&apos;s internal management application (Guestbook API).
          </p>
          <p>
            Here we would allow you to display your luxory accomodation, with
            any description you like. Including pricing, discounts, reviews and
            optional sign up for your potential guests. Any reservation made
            here is directly displayed in real time in our internal app to all
            employees that are signed in to use it.
          </p>
          <p>
            Signed in users get to leave reviews, make suggestions, check their
            booking history and checkin/out on the go. Guestbook Outdoors is
            free to use for anyone subscribed to the Guestbook API. All photos,
            descriptions and names do not represent actual places/people but are
            just a suggestion of how Your Guestbook Outdoors could look like.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          placeholder="blur"
          alt="A group of people sitting around a campfire next to a luxurious cabin."
        />
      </div>
      <div className="col-span-2">
        <Image
          src={about2}
          placeholder="blur"
          alt="A close up photo of the group of people."
        />
      </div>
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1982.
        </h1>
        <div className="space-y-8">
          <p>
            Here you can place more detailed information about your business.
            What follows is an example text.
          </p>
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>
          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all mb-20"
            >
              Explore our luxory accomodation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
