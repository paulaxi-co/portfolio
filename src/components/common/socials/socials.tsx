import { SOCIALS, SocialType } from "./const";

interface SocialProps {
  social: SocialType
  width?: number;
  height?: number;
}
export function Socials({social, width, height} : SocialProps) {

  const {icon: Icon, url} = SOCIALS[social]

  return (
    <a target="_blank" href={url}>
      <Icon width={width || 32} height={height || 32} />
    </a>
  );
}
