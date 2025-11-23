import { Container, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface ProjectScreenshotShowcaseProps {
  screenshots: {
    src: string;
    alt: string;
  }[],
  card: {
    title: string;
    items: {
      title: string;
      content: string;
    }[]
  }

}
export function ProjectScreenshotShowcase({ screenshots, card }: ProjectScreenshotShowcaseProps) {
  return (
    <Container className="relative">
      <Paper className="absolute top-4 right-4 p-4 bg-primary-400 rounded rotate-4 w-[33%]">
        <Typography variant="h5" fontWeight="500">{card.title}</Typography>
        <ul>
          {card.items.map(({ title, content }) => (
            <li className="flex flex-row gap-2" key={title}>
              <Typography fontSize={14}><b>{title}</b> {content}</Typography>
            </li>
          ))}
        </ul>
      </Paper>
      <Stack spacing={4}>
        {screenshots.map(({ src, alt }, index) => (
          <div style={{ alignSelf: index % 2 === 0 ? 'start' : 'end' }} className="w-3/4" key={src}>
            <Image src={src} alt={alt} width={800} height={600} />
          </div>
        ))}
      </Stack>
    </Container>
  );
}
