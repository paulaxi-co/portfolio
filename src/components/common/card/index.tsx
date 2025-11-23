import { twMerge } from "tailwind-merge";
import { NotesIcon } from "../icons/notes";

interface CardProps {
  className?: string;
  title: string;
  description: string;
}
export function Card({className, title, description} : CardProps) {
  return (
    <div className={twMerge("transition group border hover:border-primary-400 hover:bg-primary-400 border-primary-600 rounded-[12px] p-[32px]", className)}>
      <div className="w-[72px] h-[71px] group-hover:bg-primary-600 bg-primary-400 grid place-content-center rounded-[6px] transition">
        <NotesIcon className="text-primary-600 group-hover:text-white transition" />
      </div>
      <h3 className="text-lg font-[700] mt-6">{title}</h3>
      <p className="mt-2">
        {description}
      </p>
    </div>
  );
}
