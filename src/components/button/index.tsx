import Link from "next/link";
import React from "react";

export default function Button({
  label,
  href = "#",
  newTab,
  download,
}: {
  label: string;
  href: string;
  newTab?: boolean;
  download?: boolean;
}) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      download={download}
      className="w-fit"
    >
      <button>{label}</button>
    </Link>
  );
}
