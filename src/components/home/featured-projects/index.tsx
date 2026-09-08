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
    <section id={id} className={twMerge('relative w-full max-w-[1100px] px-4 pt-10 md:pt-[100px]', className)}>
      <Title center>Featured Projects</Title>
      <p className="text-center mt-[24px]">From research to prototypes, here’s how I design meaningful digital experiences</p>
      <ScrollableContainer extractKey={item => item.id} renderItem={({ item }) => <ProjectCard project={item} />} data={HIGHLIGHTED_PROJECTS} />
    </section>

  );
}
