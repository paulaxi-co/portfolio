import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Chip } from "./chip";

export interface ISmallProject {
  image: string;
  title: string;
  description: string;
  chips: string[]
  url?: string;
}

interface CPropts {
  children?: React.ReactNode;
}

interface SmallProjectCardProps {
  project: ISmallProject;
}
export function SmallProjectCard({ project: { title, description, chips, image, url } }: SmallProjectCardProps) {

  const Parent = url ? ({ children }: CPropts) => <a target="_blank" rel="noreferrer" href={url}>{children}</a> : ({ children }: CPropts) => <div>{children}</div>

  return (
    <Parent>
      <Stack spacing={4}>
        <Image src={image} alt={title} width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" className="aspect-[4/3] h-auto w-full rounded-2xl object-cover" />
        <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1}>
          {chips.map(chip => (
            <Chip label={chip} key={chip} />
          ))}
        </Stack>
        <Typography fontWeight={600} variant="h5">{title}</Typography>
        <Typography>
          {description}
        </Typography>
      </Stack>
    </Parent>
  );
}
