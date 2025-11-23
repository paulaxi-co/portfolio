import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface PictureProps {
  className?: string;
  src: string;
}
export function Picture({className, src} : PictureProps) {
  return (
    <div className={twMerge("p-[16px] rounded-[8px] bg-primary-400 w-max shadow-xl pt-[18px] pb-[32px]", className)}>
      <Image className="rounded-[8px] w-[200px] h-[230px] object-cover" src={src} alt="Timiza park" width={200} height={230} objectFit="cover" />
    </div>
  );

}
