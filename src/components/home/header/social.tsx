import BehanceIcon from "@/components/common/icons/behance";
import { GithubIcon } from "@/components/common/icons/github";
import { LinkedinIcon } from "@/components/common/icons/linkedin";
import { twMerge } from "tailwind-merge";

interface SocialProps {
  className?: string;
}
export function Social({ className }: SocialProps) {
  return (
    <div className={twMerge("flex flex-row justify-center sm:justify-start items-end gap-2", className)}>
      <BehanceIcon />
      <GithubIcon />
      <LinkedinIcon />
    </div>
  );
}
