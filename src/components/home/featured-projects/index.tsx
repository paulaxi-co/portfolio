import { Project, ProjectCard } from "@/components/common/project-card";
import { ScrollableContainer } from "@/components/common/scrollable-cards";
import { Title } from "@/components/common/text/title";
import { twMerge } from "tailwind-merge";

const projects: Project[] = [
  {
    id: 'bacano-bites',
    title: 'Bacano Bites App',
    description: 'Native mobile app for an 80s-inspired Colombian restaurant, with reservations, in-app ordering, real-time tracking, and gamified interactions.',
    chips: ['Product Design', 'Mobile App', 'UX/UI'],
    image: '/bacano-bites.png',
    href: '/project/bacano-bites'
  },
  {
    id: 'kopis',
    title: 'Köpiş Branding',
    description: 'A branding project for a coworking space that makes room for both ideas and wagging tails — a visual identity that balances professionalism with the playful spirit of pets.',
    chips: ['Branding'],
    image: '/kopis.png',
    href: '/project/kopis'
  },
  {
    id: 'irth',
    title: 'Irth Solutions',
    description: 'Native mobile app for an 80s-inspired Colombian restaurant, with reservations, in-app ordering, real-time tracking, and gamified interactions.',
    chips: ['Product Design', 'Redesign'],
    image: '/Irth.png',
    href: '/project/irth'
  },
  {
    id: 'jaguar',
    title: 'Jaguar.co Redesign',
    description: 'Official website for Jaguar Colombia, redesigned to enhance navigation, usability, and alignment with the brand’s global identity.',
    chips: ['Product Design', 'Redesign'],
    image: '/jaguar.png',
    href: '/project/jaguar'
  },
]

interface FeaturedProjectsProps {
  className?: string;
  id?: string;
}
export function FeaturedProjects({ className, id }: FeaturedProjectsProps) {
  return (
    <div id={id} className={twMerge('w-full px-4 max-w-[1100px] top-[-100px] relative pt-[100px]', className)}>
      <Title center>Featured Projects</Title>
      <p className="text-center mt-[24px]">From research to prototypes, here’s how I design meaningful digital experiences</p>
      <ScrollableContainer extractKey={item => item.id} renderItem={({ item }) => <ProjectCard project={item} />} data={projects} />
    </div>

  );
}
