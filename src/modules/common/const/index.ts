import { Project } from "@/components/common/project-card";

export const HIGHLIGHTED_PROJECTS: Project[] = [
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
    description: 'Enterprise product redesign that simplified complex field and geospatial workflows through user research, strategic UX, and cross-functional collaboration.',
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
