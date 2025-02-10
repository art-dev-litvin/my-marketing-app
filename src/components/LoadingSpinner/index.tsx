import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-xl text-white">Loading...</p>
    </div>
  );
}
