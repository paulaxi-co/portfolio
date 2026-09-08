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
      <Paper className="relative z-10 mb-6 w-full rounded bg-primary-400 p-4 md:absolute md:right-4 md:top-4 md:mb-0 md:w-[33%] md:rotate-4">
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
          <div style={{ alignSelf: index % 2 === 0 ? 'start' : 'end' }} className="w-full md:w-3/4" key={src}>
            <Image className="h-auto w-full" src={src} alt={alt} width={800} height={600} />
          </div>
        ))}
      </Stack>
    </Container>
  );
}
