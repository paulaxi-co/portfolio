import BehanceIcon from "@/components/common/icons/behance";
import { GithubIcon } from "@/components/common/icons/github";
import { LinkedinIcon } from "@/components/common/icons/linkedin";
import { UpArrowIcon } from "@/components/common/icons/up-arrow";
import { items } from "@/components/common/navbar";

export function Footer() {
  return (
    <div className="w-full px-[37px]">
      <div className="radial-bg w-full h-[2px]" />
      <p className="my-[16px]">© 2025 Paula Mantilla. All rights reserved.</p>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center gap-[8px]">
          <BehanceIcon width={32} height={32} />
          <GithubIcon width={32} height={32} />
          <LinkedinIcon width={32} height={32} />
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row items-center gap-[32px]">
            {items.map(item => (
              <li key={item.id}>
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        <UpArrowIcon />
      </div>
    </div>

  );
}
