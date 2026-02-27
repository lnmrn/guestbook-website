"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function FormButton({ children }) {
  const status = useFormStatus();
  return (
    <button
      disabled={status.pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {status.pending ? <SpinnerMini /> : children}
    </button>
  );
}

export default FormButton;
