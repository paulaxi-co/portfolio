import { UpArrowIcon } from "@/components/common/icons/up-arrow";
import { items } from "@/components/common/navbar";
import { Socials } from "../socials";
import Link from "next/link";

const scrollUp = () => {
  window.scrollTo(0, 0);
}

export function Footer() {

  return (
    <footer className="w-full px-4 pb-4 sm:px-[37px]">
      <div className="radial-bg w-full h-[2px]" />
      <div className="flex w-full flex-col gap-6 py-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-row items-center gap-[8px]">
          <Socials social="behance" width={32} height={32} />
          <Socials social="github" width={32} height={32} />
          <Socials social="linkedin" width={32} height={32} />
        </div>
        <nav>
          <ul className="flex flex-row flex-wrap gap-x-6 gap-y-3 sm:items-center sm:gap-[32px]">
            {items.map(item => (
              <Link key={item.id} href={item.href}>
                <li>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <button onClick={scrollUp} aria-label="Back to top" className="self-end rounded-full sm:self-auto">
          <UpArrowIcon width={48} />
        </button>
      </div>
      <p className="text-sm text-[#171717b3]">© 2026 Paula Mantilla. All rights reserved.</p>
    </footer>

  );
}
