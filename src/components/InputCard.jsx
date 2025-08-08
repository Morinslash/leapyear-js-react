import React, {useState} from "react";
import Card from "./Card";

export default function InputCard() {
    const [value, setValue] = useState("");

    const handleClick = () => {
        const trimmedValue = value.trim();
        if (!trimmedValue) {
            return;
        }
        console.log(trimmedValue);
    };

    const isDisabled = value.trim().length === 0;

    return (
        <Card title="Year Input" bodyClassName="h-full text-left">
            <div className="h-full w-full flex flex-col justify-between gap-4">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="px-3 py-2 rounded-md border border-slate-300 text-base font-normal focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <button
                    onClick={handleClick}
                    disabled={isDisabled}
                    className="px-4 py-2 rounded-md bg-slate-800 text-white text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Check
                </button>
            </div>
        </Card>
    );
}