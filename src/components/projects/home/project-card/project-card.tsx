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
        <Image src={image} alt="GoPass" width={500} height={500} className="w-full rounded-2xl h-[350px] bg-center bg-contain" />
        <Stack direction="row" spacing={1}>
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
