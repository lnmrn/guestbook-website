import StarRating from "./StarRating";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { formatDate } from "date-fns";

function Review({ review }) {
  console.log(review);
  return (
    <div className="p-4 border-b border-r border-l border-accent-700 items-center">
      <div className="flex items-center border-b border-accent-700 mb-2 pb-2">
        <UserCircleIcon className="mr-3 h-10 w-10 border-accent-700" />{" "}
        <span className="text-lg font-semibold">{review.user}</span>
        <span className="text-xs ml-auto mr-5 text-gray-500">
          {formatDate(new Date(review.created_at), "MMM dd, yyyy")}
        </span>
      </div>{" "}
      <div className="max-w-2xl text-md leading-relaxed">
        <p>{review.reviewText}</p>
      </div>
      <div className="flex">
        <div className="ml-auto">
          <StarRating
            isDisabled={true}
            maxRating={review.stars}
            color="#A47A47"
            defaultRating={review.stars}
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
