import Link from "next/link";
import React from "react";

export default function NotFoundProductPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="text-3xl mb-3">Product not found!</p>
      <Link className="hover:underline" href="/products">
        Go to products list
      </Link>
    </div>
  );
}
