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
    <div className={twMerge('flex min-w-0 flex-col', className)}>
      <h2 className={twMerge("text-center text-3xl font-[700] sm:text-4xl md:text-end", urbanist.className)}>5+ Years</h2>
      <span className={twMerge("text-center md:text-end", urbanist.className)}>Experience</span>
    </div>
  );

}
