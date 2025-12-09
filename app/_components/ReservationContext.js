"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  function resetRange() {
    setRange(initialState);
  }

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservationContext() {
  const reservationContext = useContext(ReservationContext);
  if (!reservationContext)
    throw new Error("ReservationContext used outside provider.");
  return reservationContext;
}

export { ReservationProvider, useReservationContext };
