"use client";
import { useAuthContext } from "./AuthContext";

function ReviewClientContainer() {
  const { session } = useAuthContext();
  //napravi prvo rezervacije pa onda mozes levy rigor mail dodati kao gosta
  return (
    <div>
      {session?.user
        ? "List of reviews + You can leave your review here form..."
        : "List of reviews..."}
    </div>
  );
}

export default ReviewClientContainer;
