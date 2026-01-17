import { ProjectCard } from "@/components/common/project-card";
import { ScrollableContainer } from "@/components/common/scrollable-cards";
import { Title } from "@/components/common/text/title";
import { HIGHLIGHTED_PROJECTS } from "@/modules/common/const";
import { twMerge } from "tailwind-merge";


interface FeaturedProjectsProps {
  className?: string;
  id?: string;
}
export function FeaturedProjects({ className, id }: FeaturedProjectsProps) {
  return (
    <div id={id} className={twMerge('w-full px-4 max-w-[1100px] top-[-100px] relative pt-[100px]', className)}>
      <Title center>Featured Projects</Title>
      <p className="text-center mt-[24px]">From research to prototypes, here’s how I design meaningful digital experiences</p>
      <ScrollableContainer extractKey={item => item.id} renderItem={({ item }) => <ProjectCard project={item} />} data={HIGHLIGHTED_PROJECTS} />
    </div>

  );
}
