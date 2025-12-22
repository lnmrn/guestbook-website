"use client";
import { useAuthContext } from "./AuthContext";

function ReviewClientContainer() {
  const { session } = useAuthContext();
  return (
    <div>
      {session?.user
        ? "List of reviews + You can leave your review here form..."
        : "List of reviews..."}
    </div>
  );
}

export default ReviewClientContainer;
