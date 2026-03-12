import { getReviews } from "../_lib/data-service";
import Review from "../_components/Review";

async function Page() {
  const reviews = await getReviews();
  return (
    <div className="flex flex-col items-center border-accent-700 space-y-10">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

export default Page;
