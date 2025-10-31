"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-2">
      <button onClick={() => setCount((c) => c + 1)}>Counter up!</button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
