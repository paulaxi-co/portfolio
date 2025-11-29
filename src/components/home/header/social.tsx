import { Socials } from "@/components/common/socials";
import { twMerge } from "tailwind-merge";

interface SocialProps {
  className?: string;
}
export function Social({ className }: SocialProps) {
  return (
    <div className={twMerge("flex flex-row justify-center sm:justify-start items-end gap-2", className)}>
      <Socials social="behance" width={48} height={48} />
      <Socials social="github" width={48} height={48} />
      <Socials social="linkedin" width={48} height={48} />
    </div>
  );
}
