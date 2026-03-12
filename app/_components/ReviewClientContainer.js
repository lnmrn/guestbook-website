"use client";
import { useAuthContext } from "./AuthContext";
import Review from "./Review";

function ReviewClientContainer({ reviews }) {
  const { session } = useAuthContext();
  //napravi prvo rezervacije pa onda mozes levy rigor mail dodati kao gosta
  return <div></div>;
}

export default ReviewClientContainer;
