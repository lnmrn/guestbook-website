"use client";

import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";
  return (
    <span>
      {displayText}{" "}
      <button
        onClick={() => setIsExpanded((exp) => !exp)}
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
