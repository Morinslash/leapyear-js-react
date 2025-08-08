import React from "react";

export default function Card({title, children, className = "", bodyClassName}) {
    return (
        <div
            className={`w-full h-full rounded-xl border border-slate-200 bg-white shadow-sm min-h-48 flex flex-col ${className}`}>
            <div
                className="px-4 py-2 text-xs text-center tracking-wider text-slate-500 uppercase border-b border-slate-200">
                {title}
            </div>
            <div className="flex-1 flex items-center justify-center p-6">
                <div className={`w-full ${bodyClassName ?? "text-2xl font-medium text-slate-700 text-center"}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}