"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isWorkSlugPage =
    pathname.startsWith("/works/") && pathname.split("/").length === 3;

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        isWorkSlugPage ? "bg-secondary text-white" : "bg-background"
      )}
    >
      {children}
    </div>
  );
}
