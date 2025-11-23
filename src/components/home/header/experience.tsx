import { Urbanist } from "next/font/google";
import { twMerge } from "tailwind-merge";

const urbanist = Urbanist({
  weight: ['700', '500']
})

interface ExperienceProps {
  className?: string;
}
export function Experience({className} : ExperienceProps) {
  return (
    <div className={twMerge('flex-col flex', className)}>
      <h2 className={twMerge("font-[700] text-4xl text-center sm:text-end", urbanist.className)}>+3 Years</h2>
      <span className={twMerge("sm:text-end text-center", urbanist.className)}>Experience</span>
    </div>
  );

}
