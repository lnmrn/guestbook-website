import { getGuestById, getReviews } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import Review from "../_components/Review";
import AddReview from "../_components/AddReview";

export const revalidate = 0;

async function Page() {
  const session = await auth();
  const guest = await getGuestById(session?.guestId);
  const reviews = await getReviews();

  return (
    <div className="flex flex-col items-center border-accent-700 space-y-10">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      {guest && <AddReview guest={guest} />}
    </div>
  );
}

export default Page;
