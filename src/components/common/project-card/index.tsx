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
    <article className="flex w-full flex-col overflow-hidden rounded-[24px] bg-white p-3 shadow-xl sm:rounded-[32px] sm:p-[16px] md:flex-row">
      <div className="min-h-[220px] flex-1 sm:min-h-[300px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={project.title} src={project.image} className="aspect-[4/3] h-full w-full rounded-[16px] object-cover md:aspect-auto" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-[32px]">
        <Subtitle className="font-bold">{project.title}</Subtitle>
        <div className="mt-[16px] flex flex-row flex-wrap items-center gap-2 sm:gap-[16px]">
          {project.chips.map(chip => (
            <Chip key={chip} label={chip} />
          ))}
        </div>
        <p className="mt-[32px] font-[400] text-[#171717b3]">
          {project.description}
        </p>
        <div className="mt-8 sm:mt-[64px]">
          <Button onClick={() => router.push(project.href)} variant="contained">
            <span>
            Read
            </span>
            <RightArrowIcon className="rotate-90 ml-2" />
          </Button>
        </div>
      </div>
    </article>
  );

}
