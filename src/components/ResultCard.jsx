// src/components/ResultCard.jsx
import React, { useState } from "react";
import Card from "./Card";

export default function ResultCard() {
  // Hardcoded "last 5 inputs" history
  const [history] = useState([1900, 1996, 2000, 2023, 2024]);

  // Start on the most recent (last) item
  const [index, setIndex] = useState(history.length - 1);

  const prev = () => {
    setIndex((i) => (i - 1 + history.length) % history.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % history.length);
  };

  const currentYear = history[index];

  return (
    <Card title="Result">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center w-full max-w-sm justify-between">
          <button
            type="button"
            aria-label="Previous result"
            onClick={prev}
            className="p-2 rounded-md border border-slate-200 hover:bg-slate-50 active:scale-95"
          >
            ‹
          </button>

          <div className="flex-1 flex flex-col items-center">
            <div className="text-4xl font-semibold text-slate-800">
              {currentYear}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {index + 1} / {history.length}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next result"
            onClick={next}
            className="p-2 rounded-md border border-slate-200 hover:bg-slate-50 active:scale-95"
          >
            ›
          </button>
        </div>

        <div className="flex gap-2">
          {history.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-slate-700" : "bg-slate-300"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </Card>
  );
}