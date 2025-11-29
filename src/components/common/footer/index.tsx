import { UpArrowIcon } from "@/components/common/icons/up-arrow";
import { items } from "@/components/common/navbar";
import { Socials } from "../socials";
import Link from "next/link";

const scrollUp = () => {
  window.scrollTo(0, 0);
}

export function Footer() {

  return (
    <div className="w-full px-[37px]">
      <div className="radial-bg w-full h-[2px]" />
      <p className="my-[16px]">© 2025 Paula Mantilla. All rights reserved.</p>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center gap-[8px]">
          <Socials social="behance" width={32} height={32} />
          <Socials social="github" width={32} height={32} />
          <Socials social="linkedin" width={32} height={32} />
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row items-center gap-[32px]">
            {items.map(item => (
              <Link key={item.id} href={item.href}>
                <li>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <button onClick={scrollUp}>
          <UpArrowIcon />
        </button>
      </div>
    </div>

  );
}
