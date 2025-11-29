"use client"

import { useMemo } from "react";
import { Contact } from "../contact";
import { items, Navbar } from "../navbar";
import { Footer } from "../footer";
import { usePathname } from "next/navigation";

interface CommonLayoutProps {
  children?: React.ReactNode;
}
export function CommonLayout({ children }: CommonLayoutProps) {
  const pathname = usePathname();

  const tab = useMemo(() => {
    const foundItem = items.find(item => item.href === pathname)
    if (foundItem) {
      return foundItem.id
    } else {
      return "projects" // We return projects by default since all the unhandled routed should belong to existing projects
    }

  }, [pathname]);

  return (
    <div className="flex flex-col gap-8 items-center w-full sm:py-[84px]">
      <Navbar className="fixed top-[50px] left-1/2 -translate-1/2 z-10" selected={tab} />
      {children}
      <Contact />
      <Footer />
    </div>
  );
}
