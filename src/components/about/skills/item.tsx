import Image from "next/image";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  weight: '600'
})

export interface ISkill {
  id: string;
  title: string;
  description: string;
  img: string;
  imgAlt: string;
}
interface SkillItemProps {
  skill: ISkill;
}
export function SkillItem({skill} : SkillItemProps) {
  return (
    <div className="flex flex-row gap-4 mx-2 my-4">
      <Image className="w-[50px] h-[50px] rounded object-cover relative top-[5px]" objectFit="cover" src={skill.img} alt={skill.imgAlt} width={50} height={50} />
      <div>
        <h3 className={twMerge(inter.className, 'font-[600] text-[18px]')}>{skill.title}</h3>
        <p>{skill.description}</p>
      </div>
    </div>
  );
}
