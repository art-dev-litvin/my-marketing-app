import Link from "next/link";
import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  href?: string;
  className?: string;
}

export default function Button({ href, className, children, ...props }: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 bg-white text-black rounded-xl transition-transform hover:scale-105";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
