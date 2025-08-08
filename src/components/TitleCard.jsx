import React from "react";
import Card from "./Card";

export default function TitleCard() {
  return (
    <Card title="Leap Year Kata">
        <div className="space-y-3 text-sm md:text-base">
            <p>Determine whether a given year is a leap year.</p>
            <ul className="list-disc pl-5 text-left">
                <li>Years divisible by 400 are leap years.</li>
                <li>Years divisible by 100 are not leap years.</li>
                <li>Years divisible by 4 are leap years.</li>
                <li>Other years are not leap years.</li>
            </ul>
            <p className="text-xs text-gray-500">
                Examples: 1996 is leap, 1900 is not leap, 2000 is leap, 2023 is not leap, 2024 is leap.
            </p>
        </div>
    </Card>
  );
}