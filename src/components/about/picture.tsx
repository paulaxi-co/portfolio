import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface PictureProps {
  className?: string;
  src: string;
}
export function Picture({className, src} : PictureProps) {
  return (
    <div className={twMerge("rounded-[8px] bg-primary-400 p-2.5 pb-5 pt-3 shadow-xl sm:p-[16px] sm:pb-[32px] sm:pt-[18px]", className)}>
      <Image className="aspect-[20/23] h-auto w-full rounded-[8px] object-cover" src={src} alt="Paula with her pets" width={400} height={460} sizes="(max-width: 768px) 45vw, 220px" />
    </div>
  );

}
