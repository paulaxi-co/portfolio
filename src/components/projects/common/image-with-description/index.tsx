import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface ProjectImageWithDescriptionProps {
  title: string;
  text: string;
  src: string;
  alt: string;
}
export function ProjectImageWithDescription({title, text, src, alt}: ProjectImageWithDescriptionProps) {
  return (
  <Container>
      <Stack direction="row" alignItems="center">
        <Stack>
          <Typography variant="h3">{title}</Typography>
          <Typography>{text}</Typography>
        </Stack>
        <Image className="w-full h-full object-contain" src={src} alt={alt} width={600} height={400} />
      </Stack>
    </Container>
  );
}
