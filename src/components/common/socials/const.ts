import BehanceIcon from "../icons/behance";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";

export const SOCIALS = {
  'behance': {
    icon: BehanceIcon,
    url: 'https://www.behance.net/paulamantilla4'
  },
  'github': {
    icon: GithubIcon,
    url: 'https://github.com/paulaxi-co'
  },
  'linkedin': {
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/paula-mantillat'
  },
} as const

export type SocialType = keyof typeof SOCIALS;
