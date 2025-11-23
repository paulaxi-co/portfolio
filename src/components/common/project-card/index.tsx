import { useRouter } from "next/navigation";
import { RightArrowIcon } from "../icons/right-arrow";
import { Subtitle } from "../text/subtitle";
import { Button, Chip } from "@mui/material";

export interface Project {
  id: string;
  title: string;
  description: string;
  chips: string[];
  image: string;
  href: string;
}

interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  return (
    <div className="w-full rounded-[32px] shadow-xl flex flex-col sm:flex-row p-[16px] bg-white">
      <div className="flex-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={project.title} src={project.image} className="w-full h-full object-fill rounded-[16px]" />
      </div>
      <div className="flex-1 p-[32px]">
        <Subtitle>{project.title}</Subtitle>
        <div className="flex flex-row items-center mt-[16px] gap-[16px]">
          {project.chips.map(chip => (
            <Chip key={chip} label={chip} />
          ))}
        </div>
        <p className="mt-[32px] font-[400] text-[#171717b3]">
          {project.description}
        </p>
        <div className="mt-[64px]">
          <Button onClick={() => router.push(project.href)} variant="contained">
            <span>
            Read
            </span>
            <RightArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  );

}
